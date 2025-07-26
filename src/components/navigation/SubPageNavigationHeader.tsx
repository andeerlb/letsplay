import { View, StyleSheet, Text, Pressable } from "react-native";
import { useTheme } from "@context/ThemeProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import { JSX } from "react";

interface SubPageNavigationHeaderProps extends NativeStackHeaderProps {
  title?: string;
  RightAction?: () => JSX.Element;
  rightIconAction?: () => void;
  transparent?: boolean;
  position?: string;
}

export const SubPageNavigationHeader = function ({ navigation, title = '', RightAction, rightIconAction, transparent = false, position }: SubPageNavigationHeaderProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, {
      paddingTop: insets.top + 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: transparent ? 'transparent' : theme.secondaryColors.background,
      position: position ? position : null
    }]}>
      {navigation && navigation.canGoBack() ? (
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon width={24} height={24} color={theme.colors.text} />
        </Pressable>
      ) : null}
      <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.logoBold.fontFamily }]}>{title.toUpperCase()}</Text>
      {RightAction ? (
        <Pressable
          onPress={rightIconAction ? rightIconAction : () => { }}
        >
          <RightAction />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 15,
  },
});

export default SubPageNavigationHeader;
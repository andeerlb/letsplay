/* eslint-disable react-native/no-inline-styles */
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import { useTheme } from "@context/ThemeProvider";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { JSX } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface SubPageNavigationHeaderProps extends NativeStackHeaderProps {
  title?: string;
  RightAction?: () => JSX.Element | null;
  transparent?: boolean;
  position?: string;
}

type ValidPosition = 'absolute' | 'relative' | 'static';

export const SubPageNavigationHeader = function ({ navigation, title = '', RightAction, transparent = false, position }: SubPageNavigationHeaderProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  const isValidPosition = (pos: any): pos is ValidPosition =>
    pos === 'absolute' || pos === 'relative' || pos === 'static';

  const positionStyle = isValidPosition(position) ? { position } : {};

  return (
    <View style={[styles.header, {
      paddingTop: insets.top + 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
      width: '100%',
      backgroundColor: transparent ? 'transparent' : theme.secondaryColors.background,
      ...positionStyle,
    }]}>
      {navigation && navigation.canGoBack() ? (
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon width={24} height={24} color={theme.navigation.inactive} />
        </Pressable>
      ) : null}
      <Text style={[styles.title, { color: theme.navigation.inactive, fontFamily: theme.fonts.logoBold.fontFamily }]}>{title.toUpperCase()}</Text>
      {RightAction ? (
        <Pressable>
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
import { View, StyleSheet, Text, Pressable } from "react-native";
import { useTheme } from "@context/ThemeProvider";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import BackArrowIcon from '@assets/icons/back-arrow.svg';

interface SubPageNavigationHeaderProps extends NativeStackHeaderProps {
  title: string;
}

export const SubPageNavigationHeader = function ({ navigation, title }: SubPageNavigationHeaderProps) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.header, {
      paddingTop: insets.top + 20,
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
      backgroundColor: theme.colors.background
    }]}>
      {navigation && navigation.canGoBack() ? (
        <Pressable
          onPress={() => navigation.goBack()}
        >
          <BackArrowIcon width={24} height={24} color={theme.colors.text} />
        </Pressable>
      ) : null}
      <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>{title}</Text>
      <View />
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
    fontSize: 20,
  },
});

export default SubPageNavigationHeader;
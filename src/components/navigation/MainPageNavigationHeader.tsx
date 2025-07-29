import LetsPlayIcon from '@assets/icons/letsplay.svg';
import SettingIcon from '@assets/icons/settings.svg';
import { useTheme } from "@context/ThemeProvider";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import type { AuthStackParamList } from "@tps/navigation";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children?: React.ReactNode;
  onClick?: () => void;
  hideSettings?: boolean;
  title?: string;
};

const MainPageNavigationHeader = function ({ children, title, hideSettings = true }: Props) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  const goToSettingsPage = () => {
    navigation.navigate('Setting');
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.header, {
      paddingTop: insets.top + 15,
      paddingBottom: 15,
      paddingHorizontal: 15,
      backgroundColor: theme.secondaryColors.background
    }]}>
      <LetsPlayIcon width={25} height={25} />
      {title && <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.logoBold.fontFamily }]}>{title.toLocaleUpperCase()}</Text>}
      <View style={styles.rightButtons}>
        {children && children}
        {!hideSettings && (
          <Pressable onPress={goToSettingsPage}>
            <SettingIcon width={24} height={24} fill={theme.colors.button} />
          </Pressable>
        )}
      </View >
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
  rightButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    height: 24,
    width: 24,
    gap: 15
  }
});

export default MainPageNavigationHeader;
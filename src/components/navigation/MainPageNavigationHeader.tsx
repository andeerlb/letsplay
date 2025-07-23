import { View, StyleSheet, Pressable, Text } from "react-native";
import SettingIcon from '@assets/icons/settings.svg';
import LetsPlayIcon from '@assets/icons/letsplay.svg';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthStackParamList } from "./authNavigator";
import { useTheme } from "@context/ThemeProvider";

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
      paddingTop: insets.top + 20,
      paddingBottom: insets.bottom,
      paddingHorizontal: 15,
      backgroundColor: theme.colors.background
    }]}>
      <LetsPlayIcon width={25} height={25} />
      {title && <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.regular.fontFamily }]}>{title}</Text>}
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
    fontSize: 20,
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
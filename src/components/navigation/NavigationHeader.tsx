import { View, StyleSheet, Pressable, Text } from "react-native";
import SettingIcon from '@assets/icons/settings.svg';
import LetsPlayIcon from '@assets/icons/letsplay.svg';
import { FontDefinition } from "@constants/theme";
import { useTheme } from "@context/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "./rootNavigation";
import { useLingui } from "@lingui/react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  hideSettings?: boolean;
  title?: string;
  hideLogo?: boolean
};

export default function BottomNavigationHeader({ children, title, hideSettings = true, hideLogo = false }: Props) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  const goToSettingsPage = () => {
    navigation.navigate('Setting');
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.header, {
      paddingTop: insets.top,
      paddingHorizontal: 15,
      backgroundColor: theme.secondary.background
    }]}>
      {hideLogo ? <View /> : <LetsPlayIcon width={25} height={25} />}
      {title && <Text style={[styles.title, { color: theme.secondary.text }]}>{title}</Text>}
      <View style={styles.rightButtons}>
        {children && children}
        {!hideSettings && (
          <Pressable onPress={goToSettingsPage}>
            <SettingIcon width={24} height={24} fill={theme.primary.button} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    height: 90,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
  },
  rightButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    gap: 15
  }
});
import { View, StyleSheet, Pressable, Text } from "react-native";
import SettingIcon from '@assets/icons/settings.svg';
import LetsPlayIcon from '@assets/icons/letsplay.svg';
import { FontDefinition } from "@constants/theme";
import { useTheme } from "@context/ThemeContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  hideSettings?: boolean;
  title?: string;
};

export default function NavigationHeader({ children, onClick, title, hideSettings = true }: Props) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={[styles.header, {
      paddingTop: insets.top + 15,
      paddingBottom: 15,
      paddingHorizontal: 10,
      backgroundColor: theme.secondary.background
    }]}>
      <LetsPlayIcon width={50} height={50} />
      {title && <Text style={[styles.title, { color: theme.primary.text }]}>{title}</Text>}
      <View>
        {children && <Pressable onPress={onClick}>
          {children}
        </Pressable>}
        {!hideSettings && (
          <Pressable onPress={goToSettingsPage}>
            <SettingIcon width={24} height={24} fill={theme.primary.button} />
          </Pressable>
        )}
      </View>
    </View>
  );
}

const goToSettingsPage = () => {
  console.log("Navigate to settings page");
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
  }
});
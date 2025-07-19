import { View, StyleSheet, Pressable, Text } from "react-native";
import SettingIcon from '@assets/icons/settings.svg';
import LetsPlayIcon from '@assets/icons/letsplay.svg';
import { FontDefinition } from "@constants/theme";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  hideSettings?: boolean;
  title?: string;
};

export default function NavigationHeader({ children, onClick, title, hideSettings = true }: Props) {
  return (
    <View style={styles.header}>
      <LetsPlayIcon width={50} height={50} />
      {title && <Text style={styles.title}>{title}</Text>}
      <View>
        {children && <Pressable onPress={onClick}>
          {children}
        </Pressable>}
        {!hideSettings && (
          <Pressable onPress={goToSettingsPage}>
            <SettingIcon width={24} height={24} />
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
    marginTop: 40,
    marginBottom: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 60,
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
    color: '#000',
  }
});
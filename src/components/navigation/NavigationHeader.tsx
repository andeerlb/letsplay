import { View, StyleSheet, Pressable } from "react-native";
import SettingIcon from '@assets/icons/settings.svg';
import LetsPlayIcon from '@assets/icons/letsplay.svg';

export default function NavigationHeader() {
  return (
    <View style={styles.header}>
      <LetsPlayIcon width={50} height={50} />
      <Pressable onPress={goToSettingsPage}>
        <SettingIcon width={24} height={24} />
      </Pressable>
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
});
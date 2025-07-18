import { Text, View } from "react-native";
import SettingIcon from '../../../assets/settings.svg';

export default function NavigationHeader({ navigation, route, options }) {
  const title = options.title ?? 'Default Title';

  return (
    <View style={{ height: 60, backgroundColor: '#eee', justifyContent: 'center', paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>🌟 {title}</Text>
      <SettingIcon width={24} height={24} fill="#000" />
    </View>
  );
}
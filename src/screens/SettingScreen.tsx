import { RootStackParamList } from "@components/navigation/rootNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { Text, View } from "react-native";

type SettingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Setting'>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

export function SettingScreen({ }: Props) {
    return (
      <ScreenWrapper>
        <View><Text>SettingScreen</Text></View>
      </ScreenWrapper>
    )
}
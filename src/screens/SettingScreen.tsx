import { RootStackParamList } from "@components/navigation/rootNavigation";
import { StackNavigationProp } from "@react-navigation/stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { Text, View } from "react-native";

type SettingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Setting'>;

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
import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type MatchScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Match'>;

function MatchScreen({}: { navigation: MatchScreenNavigationProp }) {
    return (
        <ScreenWrapper>
            <Text>MatchScreen Screen</Text>
        </ScreenWrapper>
    );
}

export default MatchScreen;
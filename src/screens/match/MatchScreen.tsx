import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabParamList } from "@tps/navigation";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { Text } from "react-native";

type MatchScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Match'>;

function MatchScreen({ }: { navigation: MatchScreenNavigationProp }) {
    return (
        <ScreenWrapper>
            <Text>MatchScreen Screen</Text>
        </ScreenWrapper>
    );
}

export default MatchScreen;
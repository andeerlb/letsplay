import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabHeaderProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";

type MatchScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Match'>;

function MatchScreen({}: { navigation: MatchScreenNavigationProp }) {
    return (
        <ScreenWrapper>
            <Text>MatchScreen Screen</Text>
        </ScreenWrapper>
    );
}

export function MatchScreenHeader({}: BottomTabHeaderProps) {
    const { t } = useLingui();
    return (
      <MainPageNavigationHeader title={t`MATCH_BOTTOM_MENU`} />
    )
}

export default MatchScreen;
import { Text } from "react-native";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabHeaderProps, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useLingui } from "@lingui/react/macro";

type ProfileScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Profile'>;

function ProfileScreen({ }: { navigation: ProfileScreenNavigationProp }) {

    return (
        <ScreenWrapper>
            <Text>ProfileScreen Screen</Text>
        </ScreenWrapper>
    );
}

export function ProfileScreenHeader({}: BottomTabHeaderProps) {
    const { t } = useLingui();
    return (
      <MainPageNavigationHeader title={t`PROFILE_BOTTOM_MENU`} />
    )
}

export default ProfileScreen;
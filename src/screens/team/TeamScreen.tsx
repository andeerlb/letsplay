import ScreenWrapper from "@wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { Pressable } from "react-native";
import AddIcon from '@assets/icons/plus.svg';
import MainPageNavigationHeader from "@components/navigation/MainPageNavigationHeader";
import { useTheme } from '@hooks/theme';
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

type TeamScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Team'>;

function TeamScreen({ }: { navigation: TeamScreenNavigationProp }) {
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <Search
                placeholder={t`SEARCH_BAR_PLACEHOLDER`}
                onSearch={(query) => {
                }}
            />
        </ScreenWrapper>
    );
}

export function TeamScreenHeader({ navigation }: NativeStackHeaderProps) {
    const { theme } = useTheme();
    const { t } = useLingui();
    return (
        <MainPageNavigationHeader title={t`TEAM_BOTTOM_MENU`}>
            <Pressable onPress={() => navigation.navigate("addTeam")}>
                <AddIcon width={24} height={24} color={theme.primary.button}/>
            </Pressable>
        </MainPageNavigationHeader>
    )
}

export default TeamScreen;
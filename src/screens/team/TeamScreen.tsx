import ScreenWrapper from "@wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { Pressable } from "react-native";
import AddIcon from '@assets/icons/plus.svg';
import BottomNavigationHeader from "@components/navigation/NavigationHeader";
import { useTheme } from '@hooks/theme';
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { TeamStackParamList } from "@components/navigation/teamNavigator";

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

type TeamMainNavigationProp = NativeStackNavigationProp<TeamStackParamList, 'TeamMain'>;

export function TeamScreenHeader() {
    const { t } = useLingui();
    const { theme } = useTheme();
    const navigation = useNavigation<TeamMainNavigationProp>();

    const onclick = () => {
        navigation.navigate("addTeam");
    }

    return (
        <BottomNavigationHeader title={t`TEAM_BOTTOM_MENU`}>
            <Pressable onPress={onclick}>
                <AddIcon width={24} height={24} color={theme.primary.button}/>
            </Pressable>
        </BottomNavigationHeader>
    )
}

export default TeamScreen;
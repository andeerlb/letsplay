import ScreenWrapper from "@wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { Pressable } from "react-native";
import AddIcon from '@assets/icons/plus.svg';
import NavigationHeader from "@components/navigation/NavigationHeader";
import { useTheme } from "@context/ThemeContext";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type TeamScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Team'>;

function TeamScreen({ }: { navigation: TeamScreenNavigationProp }) {
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <Search
                placeholder={t`SEARCH_BAR_PLACEHOLDER`}
                onSearch={(query) => {
                    console.log("Searching for:", query);
                }}
            />
        </ScreenWrapper>
    );
}

export function TeamScreenHeader() {
    const { t } = useLingui();
    const { theme } = useTheme();

    const onclick = () => {
        console.log("teste"); 
    }

    return (
        <NavigationHeader title={t`TEAM_BOTTOM_MENU`}>
            <Pressable onPress={onclick}>
                <AddIcon width={24} height={24} color={theme.primary.button}/>
            </Pressable>
        </NavigationHeader>
    )
}

export default TeamScreen;
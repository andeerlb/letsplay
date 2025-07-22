import ScreenWrapper from "@wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type TeamScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Team'>;

export default function TeamScreen({ }: { navigation: TeamScreenNavigationProp }) {
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <Search
                placeholder={t`screen.team.search-placeholder`}
                onSearch={(query) => {
                }}
            />
        </ScreenWrapper>
    );
}
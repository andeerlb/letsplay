import ScreenWrapper from "@wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TeamStackParamList } from "@components/navigation/teamNavigator";

type TeamScreenNavigationProps = NativeStackNavigationProp<TeamStackParamList, 'Main'>;

export default function TeamScreen({ }: { navigation: TeamScreenNavigationProps }) {
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
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { TeamStackParamList } from "@tps/navigation";
import ScreenWrapper from "@wrapper/ScreenWrapper";

type TeamScreenNavigationProps = NativeStackNavigationProp<TeamStackParamList, 'Main'>;

export default function TeamScreen({ }: { navigation: TeamScreenNavigationProps }) {
    const { t } = useLingui();

    return (
        <ScreenWrapper>
            <Search
                placeholder={t`screen.team.search-placeholder`}
                onSearch={() => { }}
            />
        </ScreenWrapper>
    );
}
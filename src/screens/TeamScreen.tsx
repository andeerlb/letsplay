import ScreenWrapper from "@src/wrapper/ScreenWrapper";
import Search from "@components/search/Search";
import { useLingui } from "@lingui/react/macro";

function TeamScreen() {
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

export default TeamScreen;
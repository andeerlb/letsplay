import { Text } from "react-native";
import ScreenWrapper from "@src/wrapper/ScreenWrapper";
import Search from "@components/search/Search";

function TeamScreen() {

    return (
        <ScreenWrapper>
            <Search
                placeholder="Buscar meus times..."
                onSearch={(query) => {
                    console.log("Searching for:", query);
                }}
            />
        </ScreenWrapper>
    );
}

export default TeamScreen;
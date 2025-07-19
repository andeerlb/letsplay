import { Trans } from "@lingui/react/macro";
import { FontDefinition } from "@constants/theme";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text } from "react-native";

function HomeScreen() {
    return (
        <ScreenWrapper>
            <Text style={styles.title}>
                <Trans>WELCOME_HOME_SCREEN</Trans>,{' '}
                <Text style={[styles.userName]}>
                    Anderson
                </Text>
            </Text>
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FontDefinition.logo.bold,
    fontSize: 20,
  },
  userName: {
    color: '#256b35ff',
  },
});

export default HomeScreen;
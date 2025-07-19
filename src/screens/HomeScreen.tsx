import { Trans } from "@lingui/react/macro";
import { FontDefinition } from "@constants/theme";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "@context/ThemeContext";

function HomeScreen() {
  const { theme } = useTheme();
  
    return (
      <ScreenWrapper>
          <Text style={[styles.title, { color: theme.primary.text }]}>
              <Trans>WELCOME_HOME_SCREEN</Trans>,{' '}
              <Text style={{ color: theme.general.secondary }}>
                  Anderson
              </Text>
          </Text>
      </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontFamily: FontDefinition.logo.bold,
    fontSize: 20,
  }
});

export default HomeScreen;
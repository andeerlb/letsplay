import { Trans } from "@lingui/react/macro";
import { FontDefinition } from "@constants/theme";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text } from "react-native";
import { useTheme } from '@hooks/theme';
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type HomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

function HomeScreen({ }: { navigation: HomeScreenNavigationProp }) {
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
import { useTheme } from "@context/ThemeProvider";
import { Trans } from "@lingui/react/macro";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootState } from "@store/index";
import { BottomTabParamList } from "@tps/navigation";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

type HomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

function HomeScreen({ }: { navigation: HomeScreenNavigationProp }) {
  const { theme } = useTheme();
  const user = useSelector((state: RootState) => state.user);

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.logoBold.fontFamily }]}>
        <Trans>screen.home.welcome</Trans>,{' '}
        <Text style={{ color: theme.colors.secondary, fontFamily: theme.fonts.logoBold.fontFamily }}>
          {user.givenName}
        </Text>
      </Text>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    fontSize: 20,
  }
});

export default HomeScreen;
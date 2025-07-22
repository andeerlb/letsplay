import { Trans } from "@lingui/react/macro";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text } from "react-native";
import { useTheme } from '@hooks/theme';
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import React from "react";

type HomeScreenNavigationProp = BottomTabNavigationProp<BottomTabParamList, 'Home'>;

function HomeScreen({ }: { navigation: HomeScreenNavigationProp }) {
  const { theme } = useTheme();

  return (
    <ScreenWrapper>
      <Text style={[styles.title, { color: theme.colors.text }]}>
        <Trans>screen.home.welcome</Trans>,{' '}
        <Text style={{ color: theme.colors.secondary, fontFamily: theme.fonts.bold.fontFamily }}>
          Anderson
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
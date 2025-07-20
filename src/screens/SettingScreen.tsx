import Toggle from "@components/toggle/Toggle";
import { RootStackParamList } from "@components/navigation/rootNavigation";
import { FontDefinition, THEME_OPTIONS } from "@constants/theme";
import { useTheme } from "@context/ThemeContext";
import { Trans } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import Select from "@components/select/Select";

type SettingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Setting'>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

export function SettingScreen({ }: Props) {
  const { theme, setTheme } = useTheme();

  return (
    <ScreenWrapper>
      <View>
        <Text style={[styles.title, { color: theme.primary.text }]}>
          <Trans>APPEARANCE</Trans>
        </Text>
        <View style={styles.appearanceContainer}>
          <Select 
            label='THEME' 
            defaultValue='dark' 
            onChange={setTheme}
            options={THEME_OPTIONS}
          />
        </View>
      </View>
    </ScreenWrapper>
  )
}

const styles = StyleSheet.create({
  text: {
    fontFamily: FontDefinition.general.regular,
    fontSize: 20,
  },
  title: {
    marginTop: 20,
    fontFamily: FontDefinition.general.extraBold,
    fontSize: 20,
  },
  appearanceContainer: {
    display: "flex"
  },
});
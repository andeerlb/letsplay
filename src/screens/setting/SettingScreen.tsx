import { RootStackParamList } from "@components/navigation/rootNavigation";
import { FontDefinition, LANGUAGE_OPTIONS, THEME_OPTIONS } from "@constants/theme";
import { useTheme } from '@hooks/theme';
import { Trans, useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text, View } from "react-native";
import Select from "@components/select/Select";
import { useLanguage } from "@hooks/useLanguage";

type SettingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Setting'>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

export function SettingScreen({ }: Props) {
  const { theme, layout, changeTheme } = useTheme();
  const { changeLanguage, language } = useLanguage();
  const { i18n, t } = useLingui();

  const translatedThemeOptions = THEME_OPTIONS.map(opt => ({
    label: i18n._(opt.label),
    value: opt.value,
  }));

  const translatedLanguageOptions = LANGUAGE_OPTIONS.map(opt => ({
    label: i18n._(opt.label),
    value: opt.value, 
  }));

  console.log(translatedLanguageOptions, translatedThemeOptions);

  return (
    <ScreenWrapper>
      <View style={styles.section}>
        <Text style={[styles.title, { color: theme.primary.text }]}>
          <Trans>APPEARANCE</Trans>
        </Text>
        <View style={styles.appearanceContainer}>
          <Select 
            label={t`THEME`}
            defaultValue={layout}
            onChange={changeTheme}
            options={translatedThemeOptions}
          />
          <Select 
            label={t`LANGUAGE`}
            defaultValue={language}
            onChange={changeLanguage}
            options={translatedLanguageOptions}
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
    display: "flex",
    gap: 10
  },
  section: {
    gap: 10
  }
});
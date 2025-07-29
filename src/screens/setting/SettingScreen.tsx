import Select from "@components/select/Select";
import { LANGUAGE_OPTIONS, THEME_OPTIONS } from "@constants/theme";
import { useTheme } from "@context/ThemeProvider";
import { useLanguage } from "@hooks/useLanguage";
import { Trans, useLingui } from "@lingui/react/macro";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthStackParamList } from "@tps/navigation";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text, View } from "react-native";

type SettingScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Setting'>;

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

  return (
    <ScreenWrapper>
      <View style={styles.section}>
        <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.heavy.fontFamily }]}>
          <Trans>screen.setting.appearance</Trans>
        </Text>
        <View style={styles.appearanceContainer}>
          <Select
            label={t`screen.setting.theme`}
            defaultValue={layout}
            onChange={changeTheme}
            options={translatedThemeOptions}
          />
          <Select
            label={t`screen.setting.language`}
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
    fontSize: 20,
  },
  title: {
    marginTop: 20,
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
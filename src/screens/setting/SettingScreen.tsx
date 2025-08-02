import Button from "@components/button/Button";
import Select from "@components/select/Select";
import { LANGUAGE_OPTIONS, THEME_OPTIONS } from "@constants/theme";
import { useTheme } from "@hooks/useTheme";
import { useToast } from "@hooks/useToast";
import { Trans, useLingui } from "@lingui/react/macro";
import { useUpdateSettings } from "@mutation/settings";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { settingsStorage } from "@storage/storage";
import { RootState } from "@store/index";
import { setLanguage, setLayout } from "@store/slices/settingSlice";
import { AuthStackParamList } from "@tps/navigation";
import ScreenWrapper from "@wrapper/ScreenWrapper";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

type SettingScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Setting'>;

type Props = {
  navigation: SettingScreenNavigationProp;
};

export function SettingScreen({ }: Props) {
  const { i18n, t } = useLingui();
  const updateSettings = useUpdateSettings();
  const toast = useToast();
  const settings = useSelector((state: RootState) => state.setting);
  const { theme } = useTheme();


  const dispatch = useDispatch();

  const translatedThemeOptions = THEME_OPTIONS.map(opt => ({
    label: i18n._(opt.label),
    value: opt.value,
  }));

  const translatedLanguageOptions = LANGUAGE_OPTIONS.map(opt => ({
    label: i18n._(opt.label),
    value: opt.value,
  }));

  const changeTheme = (newValue) => {
    dispatch(setLayout(newValue));
  }

  const changeLanguage = (newValue) => {
    dispatch(setLanguage(newValue));
  }

  const save = () => {
    console.log('layout', settings.layout);
    updateSettings.mutate({ layout: settings.layout, language: settings.language }, {
      onSuccess: () => {
        toast.success(t`screen.setting.success`,);
        settingsStorage.set(settings);
      },
      onError: () => {
        toast.error(t`screen.setting.error`,);
      }
    })
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={[styles.title, { color: theme.colors.text, fontFamily: theme.fonts.heavy.fontFamily }]}>
            <Trans>screen.setting.appearance</Trans>
          </Text>
          <View style={styles.body}>
            <Select
              label={t`screen.setting.theme`}
              value={settings.layout as string}
              onChange={changeTheme}
              options={translatedThemeOptions}
              required={true}
            />
            <Select
              label={t`screen.setting.language`}
              value={settings.language}
              onChange={changeLanguage}
              options={translatedLanguageOptions}
              required={true}
            />
          </View>
        </View>
        <Button label={t`screen.setting.save`} onPress={save} />
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
  body: {
    display: "flex",
    gap: 10
  },
  section: {
    gap: 10
  },
  container: {
    gap: 20
  }
});
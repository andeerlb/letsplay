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
  const { theme, preference, changeTheme } = useTheme();
  const { changeLanguage, locale } = useLanguage();
  const { t } = useLingui();

  return (
    <ScreenWrapper>
      <View style={styles.section}>
        <Text style={[styles.title, { color: theme.primary.text }]}>
          <Trans>APPEARANCE</Trans>
        </Text>
        <View style={styles.appearanceContainer}>
          <Select 
            label={t`THEME`}
            defaultValue={preference}
            onChange={changeTheme}
            options={THEME_OPTIONS}
          />
          <Select 
            label={t`LANGUAGE`}
            defaultValue={locale}
            onChange={changeLanguage}
            options={LANGUAGE_OPTIONS}
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
import React, { useEffect } from 'react';
import { NativeModules, Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@context/ThemeProvider';
import { Language } from '@store/slices/settingSlice';
import { LANGUAGE_OPTIONS } from '@constants/theme';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

const getDeviceLanguage = async (): Promise<Language> => {
  let locale: string | undefined;

  if (NativeModules.DeviceLocale) {
    locale = await NativeModules.DeviceLocale.getLanguage();
  } else if (Platform.OS === 'ios' && NativeModules.SettingsManager) {
    locale =
      NativeModules.SettingsManager.settings?.AppleLocale ||
      NativeModules.SettingsManager.settings?.AppleLanguages?.[0];
  }

  if (locale) {
    locale = locale.split(/[-_]/)[0];
  }

  const supportedLanguages = LANGUAGE_OPTIONS.map(opt => opt.value);
  return supportedLanguages.includes(locale as Language)
    ? (locale as Language)
    : 'pt';
};

function Root() {
  const { theme } = useTheme();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    (async () => {
      const lang = await getDeviceLanguage();
      changeLanguage(lang);
    })();
  }, []);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
            <RootStackNavigator />
          </I18nProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default Root;

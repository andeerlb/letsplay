import RootStackNavigator from '@components/navigation/rootNavigation';
import { LANGUAGE_OPTIONS } from '@constants/theme';
import { useTheme } from '@context/ThemeProvider';
import { ToastProvider } from '@context/ToastProvider';
import { useLanguage } from '@hooks/useLanguage';
import { i18n } from '@lingui/core';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { NavigationContainer } from '@react-navigation/native';
import { getToken } from '@store/slices/tokenSlice';
import { Language } from '@tps/theme';
import React, { useEffect } from 'react';
import { NativeModules, Platform, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';

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
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    (async () => {
      const lang = await getDeviceLanguage();
      changeLanguage(lang);
      dispatch(getToken());
    })();
  }, [changeLanguage, dispatch]);

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer theme={theme}>
          <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
            <ToastProvider>
              <RootStackNavigator />
            </ToastProvider>
          </I18nProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default Root;

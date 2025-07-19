import React, { useEffect, useState } from 'react';
import { StatusBar, Text, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from '@components/navigation/bottomTabNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { i18n } from "@lingui/core";
import { messages as ptMessages } from '@locales/pt/messages';
import { messages as enMessages } from '@locales/en/messages';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { useLanguage } from '@context/LocaleContext';

const messagesMap = {
  pt: ptMessages,
  en: enMessages,
};

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function App() {
  const { language } = useLanguage();
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    const loadLocale = async () => {
      await i18n.loadAndActivate({
        locale: language,
        messages: messagesMap[language],
      });
    };
    loadLocale();
  }, [language]);
  
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </I18nProvider>
    </SafeAreaProvider>
  );
}

export default App;

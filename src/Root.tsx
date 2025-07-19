import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { i18n } from "@lingui/core";

import { I18nProvider, TransRenderProps } from '@lingui/react';
import { useTheme } from '@context/ThemeContext';
import { LanguageProvider } from '@context/LanguageContext';
import RootStackNavigator from '@components/navigation/rootNavigation';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const { isDarkMode } = useTheme();
  
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <NavigationContainer>
            <LanguageProvider>
                <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
                  <RootStackNavigator />
                </I18nProvider>
            </LanguageProvider>
        </NavigationContainer>
    </>
  );
}

export default Root;

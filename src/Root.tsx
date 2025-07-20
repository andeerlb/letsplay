import React from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@hooks/theme';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const { isDarkMode } = useTheme();
  const { ready } = useLanguage();

  if (!ready) {
    return null;
  }
  
  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
          <RootStackNavigator />
        </I18nProvider>
      </NavigationContainer>
    </>
  );
}

export default Root;

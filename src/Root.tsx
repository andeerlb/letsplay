import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@context/ThemeProvider';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const { theme } = useTheme();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    changeLanguage('pt');
  }, []);

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} backgroundColor={theme.secondaryColors.background} />
      <NavigationContainer theme={theme}>
        <I18nProvider i18n={i18n} defaultComponent={DefaultComponent}>
          <SafeAreaProvider>
            <RootStackNavigator />
          </SafeAreaProvider>
        </I18nProvider>
      </NavigationContainer>
    </>
  );
}

export default Root;

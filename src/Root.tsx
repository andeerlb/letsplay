import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@hooks/theme';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useSetting } from '@query/settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const { isDarkMode, theme } = useTheme();
  const { data, isLoading } = useSetting();
  const { changeTheme } = useTheme();
  const { changeLanguage } = useLanguage();


  useEffect(() => {
    if (isLoading || !data) return;
    changeLanguage(data.language);
    changeTheme(data.theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isLoading]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
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

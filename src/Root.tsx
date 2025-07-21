import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from '@hooks/theme';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { LANGUAGE_MAP } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useSetting } from '@query/settings';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const { isDarkMode } = useTheme();
  const { data, isLoading } = useSetting();

  useEffect(() => {
    if(isLoading || !data) return;
    i18n.loadAndActivate({
      locale: data.language,
      messages: LANGUAGE_MAP[data.language],
    });
  }, [data, isLoading]);

  if (isLoading) {
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

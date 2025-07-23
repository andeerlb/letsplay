import React, { useEffect } from 'react';
import { StatusBar, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootStackNavigator from '@components/navigation/rootNavigation';
import { useLanguage } from '@hooks/useLanguage';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { i18n } from '@lingui/core';
import { useSetting } from '@query/settings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useTheme } from '@context/ThemeProvider';
import { useUser } from '@query/user';
import { setUser } from '@store/slices/userSlice';
import { useDispatch } from 'react-redux';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const dispatch = useDispatch();
  const { theme, changeTheme } = useTheme();
  const settingQuery = useSetting();
  const userQuery = useUser();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    if (settingQuery.isLoading || !settingQuery.data || !userQuery.data) return;
    changeLanguage(settingQuery.data.language);
    changeTheme(settingQuery.data.theme);
    console.log('datauser', userQuery.data);
    dispatch(setUser(userQuery.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingQuery.data, settingQuery.isLoading]);

  if (settingQuery.isLoading || userQuery.isLoading) {
    return;
  }

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

import RootStackNavigator from '@components/navigation/rootNavigation';
import { LANGUAGE_MAP } from '@constants/theme';
import { ToastProvider } from '@context/ToastProvider';
import { i18n } from '@lingui/core';
import { I18nProvider, TransRenderProps } from '@lingui/react';
import { NavigationContainer } from '@react-navigation/native';
import { loadSettings } from '@store/slices/settingSlice';
import { getToken } from '@store/slices/tokenSlice';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store';

const DefaultComponent = (props: TransRenderProps) => <Text>{props.children}</Text>;

function Root() {
  const dispatch = useDispatch<AppDispatch>();
  const settings = useSelector((state: RootState) => state.setting);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    dispatch(loadSettings());
    dispatch(getToken());
  }, [dispatch]);

  useEffect(() => {
    if (!settings || !settings.language) return;
    i18n.loadAndActivate({
      locale: settings.language,
      messages: LANGUAGE_MAP[settings.language],
    });
    setReady(true);
  }, [settings]);

  if (!ready) return;

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer theme={settings.theme}>
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

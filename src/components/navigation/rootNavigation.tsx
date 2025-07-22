import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/SettingScreen';
import { useLingui } from '@lingui/react/macro';
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from '@react-navigation/native-stack';
import SubPageNavigationHeader from '@components/navigation/SubPageNavigationHeader';

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const { t } = useLingui();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          header: (props) => <SubPageNavigationHeader {...props} title={t`SETTING_SCREEN_TITLE`}/>
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;

import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/setting/SettingScreen';
import { useLingui } from '@lingui/react/macro';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
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
          header: SettingScreenHeader
        }}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;

import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/setting/SettingScreen';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';

export type AuthStackParamList = {
  Bottom: undefined;
  Setting: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom"
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

export default AuthStackNavigator;

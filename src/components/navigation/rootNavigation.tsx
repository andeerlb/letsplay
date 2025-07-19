import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/SettingScreen';

export type RootStackParamList = {
  Main: undefined;       // The BottomTabNavigator screen
  Setting: undefined;    // Your Setting screen
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Main"
      component={BottomTabNavigator}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Setting" component={SettingScreen} />
  </Stack.Navigator>
);

export default RootStackNavigator;
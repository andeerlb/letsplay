import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import AuthStackNavigator from '@components/navigation/authNavigator';
import NoAuthStackNavigator from './noAuthNavigator';

export type RootStackParamList = {
  Auth: undefined;
  NoAuth: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const isSignIn = true;

  return (
    <Stack.Navigator>
      {isSignIn ? <Stack.Screen
        name="NoAuth"
        component={NoAuthStackNavigator}
        options={{ headerShown: false }}
      /> : <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      />}
    </Stack.Navigator>
  );
}

export default RootStackNavigator;

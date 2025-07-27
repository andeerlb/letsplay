import AuthStackNavigator from '@components/navigation/authNavigator';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RootStackParamList } from '@types/navigation';
import React from 'react';
import NoAuthStackNavigator from './noAuthNavigator';

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

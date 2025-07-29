import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SignInScreen from '@screens/signin/SignInScreen';
import SignInScreenHeaderWrapper from '@screens/signin/SignInScreenHeader';
import WelcomeScreen from '@screens/welcome/WelcomeScreen';
import { NoAuthStackParamList } from '@tps/navigation';
import React from 'react';
import SignUpStackNavigator from './signUpNavigator';

const Stack = createNativeStackNavigator<NoAuthStackParamList>();

const NoAuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpStackNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          header: SignInScreenHeaderWrapper
        }}
      />
    </Stack.Navigator>
  );
}

export default NoAuthStackNavigator;

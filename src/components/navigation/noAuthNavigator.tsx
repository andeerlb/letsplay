import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SignInScreen from '@screens/signin/SignInScreen';
import WelcomeScreen from '@screens/welcome/WelcomeScreen';
import SignUpStackNavigator from './signUpNavigator';
import SignInScreenHeaderWrapper from '@screens/signin/SignInScreenHeader';

export type NoAuthStackParamList = {
  SignIn: undefined;
  Welcome: undefined;
  SignUp: undefined;
};

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

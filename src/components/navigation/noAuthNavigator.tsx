import React from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SignInScreen from '@screens/signin/SignInScreen';

export type NoAuthStackParamList = {
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<NoAuthStackParamList>();

const NoAuthStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default NoAuthStackNavigator;

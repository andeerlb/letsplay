import AuthStackNavigator from '@components/navigation/authNavigator';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { RootState } from '@store/index';
import type { RootStackParamList } from '@tps/navigation';
import React from 'react';
import { useSelector } from 'react-redux';
import NoAuthStackNavigator from './noAuthNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const token = useSelector((state: RootState) => state.token);

  return (
    <Stack.Navigator>
      {token ? <Stack.Screen
        name="Auth"
        component={AuthStackNavigator}
        options={{ headerShown: false }}
      /> : <Stack.Screen
        name="NoAuth"
        component={NoAuthStackNavigator}
        options={{ headerShown: false }}
      />}
    </Stack.Navigator>
  );
}

export default RootStackNavigator;

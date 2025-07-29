import { useTheme } from '@context/ThemeProvider';
import { useLanguage } from '@hooks/useLanguage';
import { useSetting } from '@query/settings';
import { useUser } from '@query/user';
import {
  createNativeStackNavigator
} from '@react-navigation/native-stack';
import { SettingScreen } from '@screens/setting/SettingScreen';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';
import { AppDispatch } from '@store/index';
import { removeToken } from '@store/slices/tokenSlice';
import { setUser } from '@store/slices/userSlice';
import type { AuthStackParamList } from '@tps/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BottomTabNavigator from './bottomTabNavigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { changeTheme } = useTheme();
  const settingQuery = useSetting();
  const userQuery = useUser();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    if (settingQuery.isLoading || userQuery.isLoading) return;
    if (settingQuery.data && userQuery.data) {
      changeLanguage(settingQuery.data.language);
      changeTheme(settingQuery.data.layout);
      dispatch(setUser(userQuery.data));
    } else {
      dispatch(removeToken());
    }
  }, [
    changeLanguage,
    changeTheme,
    dispatch,
    settingQuery.data,
    settingQuery.isLoading,
    userQuery.data,
    userQuery.isLoading
  ]);

  if (settingQuery.isLoading
    || userQuery.isLoading
    || (!settingQuery.isLoading && !settingQuery.data)
    || (!userQuery.isLoading && !userQuery.data)) {
    console.log(settingQuery);
    console.log(userQuery);
    return;
  }

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

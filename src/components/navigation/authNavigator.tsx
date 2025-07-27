import { useTheme } from '@context/ThemeProvider';
import { useLanguage } from '@hooks/useLanguage';
import { useSetting } from '@query/settings';
import { useUser } from '@query/user';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import { SettingScreen } from '@screens/setting/SettingScreen';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';
import { setUser } from '@store/slices/userSlice';
import type { AuthStackParamList } from '@types/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BottomTabNavigator from './bottomTabNavigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigator = () => {
  const dispatch = useDispatch();
  const { changeTheme } = useTheme();
  const settingQuery = useSetting();
  const userQuery = useUser();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    if (settingQuery.isLoading || !settingQuery.data || !userQuery.data) return;
    changeLanguage(settingQuery.data.language);
    changeTheme(settingQuery.data.theme);
    dispatch(setUser(userQuery.data));
  }, [changeLanguage, changeTheme, dispatch, settingQuery.data, settingQuery.isLoading, userQuery.data]);

  if (settingQuery.isLoading || userQuery.isLoading) {
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

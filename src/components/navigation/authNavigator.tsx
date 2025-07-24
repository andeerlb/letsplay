import React, { useEffect } from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/setting/SettingScreen';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';
import { useDispatch } from 'react-redux';
import { useTheme } from '@context/ThemeProvider';
import { useSetting } from '@query/settings';
import { useUser } from '@query/user';
import { useLanguage } from '@hooks/useLanguage';
import { setUser } from '@store/slices/userSlice';

export type AuthStackParamList = {
  Bottom: undefined;
  Setting: undefined;
};

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [settingQuery.data, settingQuery.isLoading]);

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

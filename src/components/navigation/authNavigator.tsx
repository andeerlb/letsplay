import { useTheme } from '@context/ThemeProvider';
import { useLanguage } from '@hooks/useLanguage';
import { useSetting } from '@query/settings';
import { useUser } from '@query/user';
import { useNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp
} from '@react-navigation/native-stack';
import { SettingScreen } from '@screens/setting/SettingScreen';
import SettingScreenHeader from '@screens/setting/SettingScreenHeader';
import { setUser } from '@store/slices/userSlice';
import type { AuthStackParamList, RootStackParamList } from '@tps/navigation';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import BottomTabNavigator from './bottomTabNavigator';

const Stack = createNativeStackNavigator<AuthStackParamList>();
type AuthNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

const AuthStackNavigator = () => {
  const dispatch = useDispatch();
  const { changeTheme } = useTheme();
  const settingQuery = useSetting();
  const userQuery = useUser();
  const { changeLanguage } = useLanguage();
  const navigation = useNavigation<AuthNavigationProp>();

  useEffect(() => {
    if (settingQuery.isLoading || userQuery.isLoading) return;
    if (settingQuery.data && userQuery.data) {
      changeLanguage(settingQuery.data.language);
      changeTheme(settingQuery.data.layout);
      dispatch(setUser(userQuery.data));
    } else {
      navigation.navigate('NoAuth', { screen: 'SignIn' });
    }
  }, [changeLanguage, changeTheme, dispatch, navigation, settingQuery.data, settingQuery.isLoading, userQuery.data, userQuery.isLoading]);

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

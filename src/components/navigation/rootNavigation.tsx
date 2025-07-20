import React from 'react';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/SettingScreen';
import { useLingui } from '@lingui/react/macro';
import { ThemeContextType, useTheme } from '@context/ThemeContext';
import { Pressable } from 'react-native';
import BackArrowIcon from '@assets/icons/back-arrow.svg';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};

export function getScreenOptions<
  ParamList extends Record<string, object | undefined>,
  RouteName extends keyof ParamList
>(
  theme: ThemeContextType['theme'],
  title: string
): (props: NativeStackScreenProps<ParamList, RouteName>) => NativeStackNavigationOptions {
  return ({ navigation }) => ({
    title,
    headerStyle: { backgroundColor: theme.secondary.background },
    headerTintColor: theme.secondary.text,
    headerLeft: () =>
      navigation.canGoBack() ? (
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ paddingHorizontal: 15 }}
        >
          <BackArrowIcon width={24} height={24} color={theme.secondary.text} />
        </Pressable>
      ) : null,
  });
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  const { t } = useLingui();
  const { theme } = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={getScreenOptions(theme, t`SETTING_SCREEN_TITLE`)}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;

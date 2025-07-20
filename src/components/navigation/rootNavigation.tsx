import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNavigator';
import { SettingScreen } from '@screens/SettingScreen';
import { useLingui } from '@lingui/react/macro';
import { useTheme } from '@context/ThemeContext';
import { Pressable } from 'react-native';
import BackArrowIcon from '@assets/icons/back-arrow.svg';

export type RootStackParamList = {
  Main: undefined;
  Setting: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

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
      <Stack.Screen name="Setting" component={SettingScreen}
        
        options={({ navigation }) => ({
          title: t`SETTING_SCREEN_TITLE`,
          headerStyle: {
            backgroundColor: theme.secondary.background,
          },
          headerTintColor: theme.secondary.text,
          headerLeft: () => (
            navigation.canGoBack() && <Pressable
              onPress={() => navigation.goBack()}
              style={{
                paddingHorizontal: 15,
              }}
            >
              <BackArrowIcon width={24} height={24} color={theme.secondary.text} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default RootStackNavigator;
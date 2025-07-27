import { useTheme } from '@context/ThemeProvider';
import { useLingui } from "@lingui/react/macro";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';
import HomeScreenHeader from '@screens/home/HomeScreenHeader';
import MatchScreen from '@screens/match/MatchScreen';
import MatchScreenHeader from '@screens/match/MatchScreenHeader';
import ProfileScreen from '@screens/profile/ProfileScreen';
import ProfileScreenHeader from '@screens/profile/ProfileScreenHeader';
import { BottomTabParamList } from '@types/navigation';
import { getBottomNavigatorBarStyle } from '@utils/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TeamStackNavigator from './teamNavigator';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { t } = useLingui();
  const { theme } = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <Tab.Navigator screenOptions={({ route }) => getBottomNavigatorBarStyle(route.name, theme, safeAreaInsets)}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t`screen.home.title`,
          header: HomeScreenHeader
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          title: t`screen.match.title`,
          header: MatchScreenHeader
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamStackNavigator}
        options={{
          title: t`screen.profile.title`,
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t`screen.profile.title`,
          header: ProfileScreenHeader
        }}
      />
    </Tab.Navigator>
  );
}

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/home/HomeScreen';
import ProfileScreen from '@screens/profile/ProfileScreen';
import MatchScreen from '@screens/match/MatchScreen';
import { useLingui } from "@lingui/react/macro";
import { useTheme } from '@hooks/theme';
import HomeScreenHeader from '@screens/home/HomeScreenHeader';
import MatchScreenHeader from '@screens/match/MatchScreenHeader';
import ProfileScreenHeader from '@screens/profile/ProfileScreenHeader';
import TeamStackNavigator from './teamNavigator';
import { getBottomNavigatorBarStyle } from '@utils/theme';

export type BottomTabParamList = {
  Home: undefined;
  Match: undefined;
  Team: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const { t } = useLingui();
  const { theme } = useTheme();

  return (
    <Tab.Navigator screenOptions={({ route }) => getBottomNavigatorBarStyle(route.name, theme)}>
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

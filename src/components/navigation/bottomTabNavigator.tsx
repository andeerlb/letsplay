import SoccerBallIcon from '@assets/icons/soccer_ball.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import HomeIcon from '@assets/icons/home.svg';
import TeamIcon from '@assets/icons/team.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import MatchScreen from '@screens/MatchScreen';
import NavigationHeader from '@components/navigation/NavigationHeader';
import TeamScreen, { TeamScreenHeader } from '@screens/TeamScreen';
import { useLingui } from "@lingui/react/macro";
import { FontDefinition } from '@constants/theme';
import { useTheme } from '@context/ThemeContext';

export type BottomTabParamList = {
  Home: undefined;
  Match: undefined;
  Team: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

const getTabBarIcon = (routeName: string, color: string, size: number) => {
  if (routeName === 'Home') {
    return <HomeIcon width={size} height={size} fill={color} />;
  } else if (routeName === 'Profile') {
    return <ProfileIcon width={size} height={size} fill={color} />;
  } else if (routeName === 'Match') {
    return <SoccerBallIcon width={size} height={size} fill={color} />;
  } else if (routeName === 'Team') {
    return <TeamIcon width={size} height={size} fill={color} />;
  }
  return null;
};

export default function BottomTabNavigator() {
  const { t } = useLingui();
  const { theme } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarShowLabel: true,
        tabBarActiveTintColor: theme.secondary.button,
        tabBarInactiveTintColor: theme.primary.button,
        tabBarLabelStyle: {
          fontFamily: FontDefinition.general.regular,
          fontSize: 10,
          fontWeight: '500',
        },
        tabBarStyle: {
          paddingTop: 5,
          height: 90,
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: theme.secondary.background,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: t`HOME_BOTTOM_MENU`,
          header: () => <NavigationHeader title={t`HOME_BOTTOM_MENU`} hideSettings={false} />
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          title: t`MATCH_BOTTOM_MENU`,
          header: () => <NavigationHeader title={t`MATCH_BOTTOM_MENU`} />
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          title: t`TEAM_BOTTOM_MENU`,
          header: () => <TeamScreenHeader />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: t`PROFILE_BOTTOM_MENU`,
          header: () => <NavigationHeader title={t`PROFILE_BOTTOM_MENU`} hideSettings={false} />
        }}
      />
    </Tab.Navigator>
  );
}
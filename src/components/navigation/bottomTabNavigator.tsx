import SoccerBallIcon from '@assets/icons/soccer_ball.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import HomeIcon from '@assets/icons/home.svg';
import TeamIcon from '@assets/icons/team.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/HomeScreen';
import ProfileScreen from '@screens/ProfileScreen';
import MatchScreen from '@screens/MatchScreen';
import NavigationHeader from '@components/navigation/NavigationHeader';
import TeamScreen from '@src/screens/TeamScreen';

const Tab = createBottomTabNavigator();

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
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#256b35ff',
        tabBarInactiveTintColor: '#888',
        tabBarLabelStyle: {
          fontWeight: '500',
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          header: () => <NavigationHeader title="Inicio" hideSettings={false} />
        }}
      />
      <Tab.Screen
        name="Match"
        component={MatchScreen}
        options={{
          title: "Buscar",
          header: () => <NavigationHeader title='Buscar' />
        }}
      />
      <Tab.Screen
        name="Team"
        component={TeamScreen}
        options={{
          title: "Times",
          header: () => <NavigationHeader title='Times' />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Conta",
          header: () => <NavigationHeader title='Conta' hideSettings={false} />
        }}
      />
    </Tab.Navigator>
  );
}
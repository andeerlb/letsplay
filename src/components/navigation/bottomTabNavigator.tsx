import SoccerBallIcon from '../../../assets/soccer_ball.svg';
import ProfileIcon from '../../../assets/profile.svg';
import HomeIcon from '../../../assets/home.svg';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MatchScreen from '../../screens/MatchScreen';
import NavigationHeader from './NavigationHeader';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (routeName: string, color: string, size: number) => {
  if (routeName === 'Home') {
    return <HomeIcon width={size} height={size} fill={color} />;
  } else if (routeName === 'Profile') {
    return <ProfileIcon width={size} height={size} fill={color} />;
  } else if (routeName === 'Match') {
    return <SoccerBallIcon width={size} height={size} fill={color} />;
  }
  return null;
};

const customHeader = (props: any) => <NavigationHeader {...props} />;

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: "Inicio", header: customHeader }}/>
      <Tab.Screen name="Match" component={MatchScreen} options={{ title: "Buscar", header: customHeader }}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: "Conta", header: customHeader }}/>
    </Tab.Navigator>
  );
}
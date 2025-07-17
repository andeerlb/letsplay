import React from 'react';
import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import MatchScreen from './src/screens/MatchScreen';
import { NavigationContainer } from '@react-navigation/native';
import SoccerBallIcon from './assets/soccer_ball.svg';
import ProfileIcon from './assets/profile.svg';
import HomeIcon from './assets/home.svg';

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

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => getTabBarIcon(route.name, color, size),
        tabBarShowLabel: true,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Match" component={MatchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer>
        <BottomTabs />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

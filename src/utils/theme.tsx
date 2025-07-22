import { FontDefinition, Theme } from "@constants/theme";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import SoccerBallIcon from '@assets/icons/soccer_ball.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import HomeIcon from '@assets/icons/home.svg';
import TeamIcon from '@assets/icons/team.svg';

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

export const getTabBarStyle = (route: RouteProp<ParamListBase>, theme: Theme): BottomTabNavigationOptions => {
    return {
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
    };
}
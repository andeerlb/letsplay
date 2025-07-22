import { Theme } from "@constants/theme";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import SoccerBallIcon from '@assets/icons/soccer_ball.svg';
import ProfileIcon from '@assets/icons/profile.svg';
import HomeIcon from '@assets/icons/home.svg';
import TeamIcon from '@assets/icons/team.svg';
import { BottomTabParamList } from "@components/navigation/bottomTabNavigator";
import { StyleProp, ViewStyle } from "react-native";

const getTabBarIcon = (routeName: keyof BottomTabParamList, color: string, size: number) => {
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

export const getBottomNavigatorBarStyle = (
    routeName: keyof BottomTabParamList,
    theme: Theme,
    animatedStyle?: StyleProp<ViewStyle>
): BottomTabNavigationOptions => ({
    tabBarIcon: ({ color, size }) => getTabBarIcon(routeName, color, size),
    tabBarShowLabel: true,
    tabBarActiveTintColor: theme.colors.button,
    tabBarInactiveTintColor: theme.colors.button,
    tabBarLabelStyle: {
        fontFamily: theme.fonts.regular.fontFamily,
        fontSize: 10,
        fontWeight: theme.fonts.regular.fontWeight,
    },
    tabBarStyle: getTabBarStyle(theme, animatedStyle),
});

export const getTabBarStyle = (
    theme: Theme,
    animatedStyle?: StyleProp<ViewStyle>
): StyleProp<ViewStyle> => ({
    paddingTop: 5,
    height: 90,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: theme.colors.background,
    ...((animatedStyle as object) || {}),
});
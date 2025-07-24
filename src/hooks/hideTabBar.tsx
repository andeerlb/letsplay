import { useFocusEffect, NavigationProp } from '@react-navigation/native';
import { useCallback } from 'react';
import { useTheme } from '@context/ThemeProvider';
import { getTabBarStyle } from '@utils/theme';
import { BottomTabParamList } from '@components/navigation/bottomTabNavigator';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const expectedTabs = Object.keys({
    Home: null,
    Match: null,
    Team: null,
    Profile: null,
}) as (keyof BottomTabParamList)[];

function findBottomTabNavigator(
    navigation: NavigationProp<any>,
    maxLevels = 5
): NavigationProp<any> | null {
    let parent = navigation;
    for (let i = 0; i < maxLevels; i++) {
        parent = parent.getParent();
        if (!parent) break;
        const state = parent.getState();
        if (
            state?.routeNames &&
            expectedTabs.every(tab => state.routeNames.includes(tab))
        ) {
            return parent;
        }
    }
    return null;
}

export function useHideTabBar(navigation: NavigationProp<any>) {
    const { theme } = useTheme();
    const safeAreaInsets = useSafeAreaInsets();

    useFocusEffect(
        useCallback(() => {
            const tabNav = findBottomTabNavigator(navigation);
            if (!tabNav) return;

            tabNav.setOptions({
                tabBarStyle: { display: 'none' },
            });

            return () => {
                tabNav.setOptions({
                    tabBarStyle: getTabBarStyle(theme, safeAreaInsets),
                });
            };
        }, [navigation, theme])
    );
}

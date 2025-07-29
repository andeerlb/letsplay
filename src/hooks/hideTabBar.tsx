import { useTheme } from '@context/ThemeProvider';
import { NavigationProp, useFocusEffect } from '@react-navigation/native';
import type { BottomTabParamList } from '@tps/navigation';
import { getTabBarStyle } from '@utils/theme';
import { useCallback } from 'react';
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
        }, [navigation, safeAreaInsets, theme])
    );
}

import { DarkTheme, LightTheme } from '@constants/theme';
import { RootState } from '@store/index';
import { setLayout } from '@store/slices/settingSlice';
import type { ThemeContextType, UseThemeProps } from '@tps/context';
import type { Layout, Theme } from '@tps/theme';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const ThemeContext = createContext<ThemeContextType>({
    theme: DarkTheme
});

const getThemeBaseOnScheme = (scheme: Layout) => {
    return scheme === 'dark' ? DarkTheme : LightTheme;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme();
    const [theme, updateTheme] = useState<Theme>(DarkTheme);
    const layout = useSelector((state: RootState) => state.setting.layout);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!layout || layout === "system") {
            updateTheme(getThemeBaseOnScheme(systemScheme || "dark"));
            if (!layout) {
                dispatch(setLayout("system"));
            }
        } else {
            updateTheme(getThemeBaseOnScheme(layout));
        }
    }, [dispatch, layout, systemScheme]);

    const contextValue = React.useMemo(() => ({ theme }), [theme]);

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): UseThemeProps => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const layout = useSelector((state: RootState) => state.setting.layout);

    const changeTheme = useCallback((layoutParm: Layout) => {
        dispatch(setLayout(layoutParm));
    }, [dispatch]);

    return {
        theme,
        layout,
        changeTheme
    };
};


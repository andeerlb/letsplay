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
    const [theme, updateTheme] = useState<Theme>(getThemeBaseOnScheme(systemScheme || "dark"));
    const layout = useSelector((state: RootState) => state.setting.layout);

    useEffect(() => {
        if (layout === "system") {
            updateTheme(getThemeBaseOnScheme(systemScheme || "dark"));
        } else {
            updateTheme(getThemeBaseOnScheme(layout));
        }
    }, [layout, systemScheme]);

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


    const changeTheme = useCallback((layout: Layout) => {
        dispatch(setLayout(layout));
    }, [dispatch]);

    return {
        theme,
        layout,
        changeTheme
    };
};


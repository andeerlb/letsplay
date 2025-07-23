import { DarkTheme, LightTheme, Theme } from '@constants/theme';
import { RootState } from '@store/index';
import { Layout, setLayout } from '@store/slices/settingSlice';
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export type ThemeContextType = {
    theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: DarkTheme
});

type UseThemeProps = {
    theme: Theme;
    layout: Layout,
    changeTheme: (layout: Layout) => void;
};

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

    return (
        <ThemeContext.Provider value={{ theme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): UseThemeProps => {
    const dispatch = useDispatch();
    const { theme } = useContext(ThemeContext);

    const layout = useSelector((state: RootState) => state.setting.layout);

    const changeTheme = (layoutParam: Layout) => {
        dispatch(setLayout(layoutParam));
    }

    return {
        theme,
        layout,
        changeTheme
    };
};


import { DarkTheme, LightTheme, Theme } from '@constants/theme';
import { Layout } from '@store/slices/settingSlice';
import React, { createContext, useEffect, useRef, useState } from 'react';
import { Appearance, useColorScheme } from 'react-native';

export type ThemeContextType = {
    theme: Theme;
    scheme: Layout;
    setScheme: (scheme: Layout) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: DarkTheme,
    scheme: 'dark',
    setScheme: () => { }
});

const getThemeBaseOnScheme = (scheme: Layout) => {
    return scheme === 'dark' ? DarkTheme : LightTheme;
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const systemScheme = useColorScheme(); // 'light' | 'dark'
    const [scheme, updateScheme] = useState<Layout>("system");
    const [theme, updateTheme] = useState<Theme>(getThemeBaseOnScheme(systemScheme || "dark"));

    const setScheme = (colorScheme: Layout) => {
        updateScheme(colorScheme);

        if (colorScheme === "system") {
            updateTheme(getThemeBaseOnScheme(systemScheme || "dark"));
        } else {
            updateTheme(getThemeBaseOnScheme(colorScheme));
        }
    };

    useEffect(() => {
        if (scheme === "system") {
            updateTheme(getThemeBaseOnScheme(systemScheme || "dark"));
        }
    }, [scheme, systemScheme]);

    return (
        <ThemeContext.Provider value={{ theme, scheme, setScheme }}>
            {children}
        </ThemeContext.Provider>
    );
};


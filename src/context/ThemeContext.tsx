import React, { createContext, useContext } from 'react';
import { LightTheme, DarkTheme } from '@constants/theme';
import { useColorScheme } from 'react-native';

type Layouts = 'dark' | 'light' | 'system';

export type ThemeContextType = {
  theme: typeof LightTheme | typeof DarkTheme;
  isDarkMode: boolean;
  setTheme(theme: Layouts): void
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const isDarkMode = scheme === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;

  const setTheme = (theme: Layouts) => {

  }

  return <ThemeContext.Provider value={{ theme, isDarkMode, setTheme }}>
    {children}
  </ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

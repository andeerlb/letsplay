import React, { createContext, useContext } from 'react';
import { LightTheme, DarkTheme } from '@src/constants/theme';
import { useColorScheme } from 'react-native';

const ThemeContext = createContext(LightTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : LightTheme;

  return <ThemeContext.Provider value={theme}>
    {children}
  </ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

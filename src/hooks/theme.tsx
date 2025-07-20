// src/hooks/useTheme.ts
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LightTheme, DarkTheme, AppTheme } from '@constants/theme';
import { Layouts } from '../store/slices/themeSlice';

type UseThemeProps = {
  theme: AppTheme;
  isDarkMode: boolean;
  preference: Layouts;
};

export const useTheme = (): UseThemeProps => {
  const scheme = useColorScheme();
  const preference = useSelector((state: RootState) => state.theme.preference);

  const isDarkMode =
    preference === 'dark' || (preference === 'system' && scheme === 'dark');

  const theme: AppTheme = isDarkMode ? DarkTheme : LightTheme;

  return {
    theme,
    isDarkMode,
    preference,
  };
};

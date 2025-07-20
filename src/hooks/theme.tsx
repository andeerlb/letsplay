import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { LightTheme, DarkTheme } from '@constants/theme';

export const useTheme = () => {
  const scheme = useColorScheme();
  const preference = useSelector((state: RootState) => state.theme.preference);

  const isDarkMode =
    preference === 'dark' || (preference === 'system' && scheme === 'dark');

  const theme = isDarkMode ? DarkTheme : LightTheme;

  return {
    theme,
    isDarkMode,
    preference,
  };
};

import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { LightTheme, DarkTheme, AppTheme } from '@constants/theme';
import { Layouts, setPreference } from '../store/slices/themeSlice';
import { useEffect, useState } from 'react';

type UseThemeProps = {
  theme: AppTheme;
  isDarkMode: boolean;
  changeTheme: (theme: Layouts) => void;
};

export const useTheme = (): UseThemeProps => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const preference = useSelector((state: RootState) => state.theme.preference);
  const [theme, setTheme] = useState<AppTheme>(DarkTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {    
    setIsDarkMode(preference === 'dark' || (preference === 'system' && scheme === 'dark'));
    setTheme(isDarkMode ? DarkTheme : LightTheme)
  }, [isDarkMode, preference, scheme]);

  const changeTheme = (layout: Layouts) => {
    dispatch(setPreference(layout));
  }

  return {
    theme,
    isDarkMode,
    changeTheme
  };
};

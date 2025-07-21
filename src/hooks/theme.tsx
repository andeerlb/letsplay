import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { LightTheme, DarkTheme, AppTheme } from '@constants/theme';
import { Layouts, setPreference } from '../store/slices/themeSlice';
import { useEffect, useState } from 'react';

type UseThemeProps = {
  theme: AppTheme;
  isDarkMode: boolean;
  preference: Layouts,
  changeTheme: (theme: Layouts) => void;
};

export const useTheme = (): UseThemeProps => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const preference = useSelector((state: RootState) => state.theme.preference);
  const [theme, setTheme] = useState<AppTheme>(DarkTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if(preference !== 'system') {
      const isDark = preference === 'dark';
      setIsDarkMode(isDark);
      setTheme(isDark ? DarkTheme : LightTheme)
    }
  }, [isDarkMode, preference]);

  useEffect(() => {
    if(preference === 'system') {
      const isDark = scheme === 'dark';
      setIsDarkMode(isDark);
      setTheme(isDark ? DarkTheme : LightTheme)
    }
  },[scheme, preference])

  const changeTheme = (layout: Layouts) => {
    dispatch(setPreference(layout));
  }

  return {
    theme,
    isDarkMode,
    preference,
    changeTheme
  };
};

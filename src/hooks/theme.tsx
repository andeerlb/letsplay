import { useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { LightTheme, DarkTheme, Theme } from '@constants/theme';
import { useCallback, useEffect, useState } from 'react';
import { Layout, setLayout } from '@store/slices/settingSlice';

type UseThemeProps = {
  theme: Theme;
  isDarkMode: boolean;
  layout: Layout,
  changeTheme: (theme: Layout) => void;
};

export const useTheme = (): UseThemeProps => {
  const dispatch = useDispatch();
  const scheme = useColorScheme();
  const layout = useSelector((state: RootState) => state.setting.layout);
  const [theme, setTheme] = useState<Theme>(DarkTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if(layout !== 'system') {
      const isDark = layout === 'dark';
      setIsDarkMode(isDark);
      setTheme(isDark ? DarkTheme : LightTheme)
    }
  }, [isDarkMode, layout]);

  useEffect(() => {
    if(layout === 'system') {
      const isDark = scheme === 'dark';
      setIsDarkMode(isDark);
      setTheme(isDark ? DarkTheme : LightTheme)
    }
  },[scheme, layout])

  const changeTheme = useCallback((layoutParam: Layout) => {
    dispatch(setLayout(layoutParam));
  }, [dispatch]);

  return {
    theme,
    isDarkMode,
    layout,
    changeTheme
  };
};

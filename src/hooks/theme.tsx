import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useCallback, useContext } from 'react';
import { Layout, setLayout } from '@store/slices/settingSlice';
import { Theme } from '@constants/theme';
import { ThemeContext } from '@context/ThemeProvider';

type UseThemeProps = {
  theme: Theme;
  layout: Layout,
  changeTheme: (layout: Layout) => void;
};

export const useTheme = (): UseThemeProps => {
  const { setScheme, theme } = useContext(ThemeContext);
  const dispatch = useDispatch();

  const layout = useSelector((state: RootState) => state.setting.layout);

  const changeTheme = useCallback((layoutParam: Layout) => {
    dispatch(setLayout(layoutParam));
    setScheme(layoutParam);
  }, [dispatch, setScheme]);

  return {
    theme,
    layout,
    changeTheme
  };
};

import { RootState } from '@store/index';
import { ThemeDefinition } from '@tps/theme';
import { useSelector } from 'react-redux';

export const useTheme = (): { theme: ThemeDefinition } => {
    const theme = useSelector((state: RootState) => state.setting.theme);
    return { theme }
};


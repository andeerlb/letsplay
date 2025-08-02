import { useApiPut } from '@hooks/useApiPut';
import { Settings } from '@tps/api';

export const useUpdateSettings = () => {
    return useApiPut<Settings, any>('/settings');
};
import { useApiPut } from '@hooks/useApiPut';
import { Settings } from '@tps/api';
import { Config } from 'react-native-config';

export const useUpdateSettings = () => {
    return useApiPut<Settings, any>(`${Config.API}/public/signup`);
};
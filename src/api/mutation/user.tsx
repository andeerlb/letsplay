// mutations/useCreateUser.ts
import { useApiPost } from '@hooks/useApiPost';
import { UserCredentials } from '@tps/api';
import { Config } from 'react-native-config';

export const useCreateUser = () => {
    return useApiPost<UserCredentials, any>(`${Config.API}/public/newplayer`);
};

export const useGetToken = () => {
    return useApiPost<UserCredentials, any>(`${Config.AUTH_API}/token?grant_type=password`);
};

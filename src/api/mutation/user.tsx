import { useApiPost } from '@hooks/useApiPost';
import { SignUpRequestType, UserCredentials } from '@tps/api';
import { Config } from 'react-native-config';

export const useCreateUser = () => {
    return useApiPost<SignUpRequestType, any>(`${Config.API}/public/signup`);
};

export const useGetToken = () => {
    return useApiPost<UserCredentials, any>(`${Config.AUTH_API}/token?grant_type=password`);
};

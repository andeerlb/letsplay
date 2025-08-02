import { useApiPost } from '@hooks/useApiPost';
import { SignUpRequestType, UserCredentials } from '@tps/api';

export const useCreateUser = () => {
    return useApiPost<SignUpRequestType, any>('/public/signup');
};

export const useGetToken = () => {
    return useApiPost<UserCredentials, any>('/token?grant_type=password', undefined, true);
};

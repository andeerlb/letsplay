// mutations/useCreateUser.ts
import { useApiPost } from '@hooks/useApiPost';
import { UserCredentials } from '@types/api';
import { Config } from 'react-native-config';

const USER_URL = Config.AUTH_API + "/signup";

export const useCreateUser = () => {
    return useApiPost<UserCredentials, any>(USER_URL);
};

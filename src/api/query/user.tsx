import { fetcher } from '@hooks/apiClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, User } from '@types/api';
import { Config } from 'react-native-config';

const USER_URL = `${Config.API}/user`;

export function useUser(): UseQueryResult<User, ApiError> {
  return useQuery<User, ApiError>({
    queryKey: ['user'],
    queryFn: () => fetcher<User>(USER_URL),
  });
}

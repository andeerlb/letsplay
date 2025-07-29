import { fetcher } from '@hooks/apiClient';
import { RootState } from '@store/index';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, User } from '@tps/api';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';

const USER_URL = `${Config.API}/user`;

export function useUser(): UseQueryResult<User, ApiError> {
  const token = useSelector((state: RootState) => state.token);
  return useQuery<User, ApiError>({
    queryKey: ['user'],
    queryFn: () => fetcher<User>(USER_URL, token),
  });
}

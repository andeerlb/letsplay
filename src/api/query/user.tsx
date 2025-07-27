import { fetchUser } from '@fetch/user';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { User } from '@types/api';

export function useUser(): UseQueryResult<User> {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
}

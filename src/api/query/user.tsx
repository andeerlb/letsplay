import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchUser } from '@fetch/user';

type User = {
  givenName: string;
  surname: string;
  nickname: string;
  email: string
}

export function useUser(): UseQueryResult<User> {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
}

import { useApiGet } from '@hooks/useApiGet';
import type { User } from '@tps/api';

export function useUser() {
  return useApiGet<User>(['user'], '/user');
}

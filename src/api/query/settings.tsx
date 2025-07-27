import { fetchSettings } from '@fetch/settings';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { Settings } from '@types/api';

export function useSetting(): UseQueryResult<Settings> {
  return useQuery<Settings>({
    queryKey: ['settings'],
    queryFn: fetchSettings,
  });
}

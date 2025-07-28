import { fetcher } from '@hooks/apiClient';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, Settings } from '@types/api';
import { Config } from 'react-native-config';

const SETTINGS_URL = `${Config.API}/settings`;

export function useSetting(): UseQueryResult<Settings, ApiError> {
  return useQuery<Settings, ApiError>({
    queryKey: ['settings'],
    queryFn: () => fetcher<Settings>(SETTINGS_URL),
  });
}

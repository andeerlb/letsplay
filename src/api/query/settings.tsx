import { fetcher } from '@hooks/apiClient';
import { RootState } from '@store/index';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import type { ApiError, Settings } from '@tps/api';
import { Config } from 'react-native-config';
import { useSelector } from 'react-redux';

const SETTINGS_URL = `${Config.API}/settings`;

export function useSetting(): UseQueryResult<Settings, ApiError> {
  const token = useSelector((state: RootState) => state.token);
  return useQuery<Settings, ApiError>({
    queryKey: ['settings'],
    queryFn: () => fetcher<Settings>(SETTINGS_URL, token),
  });
}

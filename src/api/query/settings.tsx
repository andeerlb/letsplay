import { useApiGet } from '@hooks/useApiGet';
import type { Settings } from '@tps/api';

export function useSetting() {
  return useApiGet<Settings>(['settings'], '/settings');
}
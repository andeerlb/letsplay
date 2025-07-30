import { useApiGet } from '@hooks/useApiGet';
import type { Settings } from '@tps/api';
import { Config } from 'react-native-config';


export function useSetting() {
  return useApiGet<Settings>(['settings'], `${Config.API}/settings`);
}
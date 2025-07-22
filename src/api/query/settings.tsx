import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchSettings } from '@fetch/settings';
import { Language, Layout } from '@store/slices/settingSlice';

type Settings = {
  theme: Layout;
  language: Language;
};

export function useSetting(): UseQueryResult<Settings> {
  return useQuery<Settings>({
      queryKey: ['settings'],
      queryFn: fetchSettings,
    });
}

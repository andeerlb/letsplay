import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchSettings } from '@fetch/settings';
import { Layouts } from '@store/slices/themeSlice';
import { Language } from '@store/slices/languageSlice';

type Settings = {
  theme: Layouts;
  language: Language;
};

export function useSetting(): UseQueryResult<Settings> {
  return useQuery<Settings>({
      queryKey: ['settings'],
      queryFn: fetchSettings,
    });
}

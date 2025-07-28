import { fetcher } from '@hooks/apiClient';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ApiError } from '@types/api';

export const useApiGet = <TResponse>(
    key: string[],
    url: string,
    options?: UseQueryOptions<TResponse, ApiError>
) => {
    return useQuery<TResponse, ApiError>({
        queryKey: key,
        queryFn: () => fetcher<TResponse>(url),
        ...options,
    });
};

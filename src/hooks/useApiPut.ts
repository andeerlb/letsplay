import { fetcher } from '@hooks/apiClient';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ApiError } from '@types/api';

export const useApiPut = <TPayload, TResponse>(
    url: string,
    options?: UseMutationOptions<TResponse, ApiError, TPayload>
) => {
    return useMutation<TResponse, ApiError, TPayload>({
        mutationFn: (payload) =>
            fetcher<TResponse>(url, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            }),
        ...options,
    });
};

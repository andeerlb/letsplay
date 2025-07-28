import { fetcher } from '@hooks/apiClient';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ApiError } from '@types/api';

export const useApiDelete = <TPayload = void, TResponse = void>(
    url: string,
    options?: UseMutationOptions<TResponse, ApiError, TPayload>
) => {
    return useMutation<TResponse, ApiError, TPayload>({
        mutationFn: (payload) =>
            fetcher<TResponse>(url, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: payload ? JSON.stringify(payload) : undefined,
            }),
        ...options,
    });
};

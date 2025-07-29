import { fetcher } from '@hooks/apiClient';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ApiError } from '@tps/api';

export const useApiPost = <TPayload, TResponse>(
    url: string,
    options?: UseMutationOptions<TResponse, ApiError, TPayload>
) => {
    return useMutation<TResponse, ApiError, TPayload>({
        mutationFn: (payload) => {
            console.log(url, payload, options);
            return fetcher<TResponse>(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            })
        },
        ...options,
    });
};

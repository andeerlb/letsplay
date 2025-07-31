import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { SilentHandledError } from '@tps/errors';

export function useSafeQuery<TQueryFnData, TError = unknown>(
    options: UseQueryOptions<TQueryFnData, TError>
): UseQueryResult<TQueryFnData, TError> {
    const wrappedOnError = (error: TError) => {
        if (error instanceof SilentHandledError) return;
        options.onError?.(error);
    };

    return useQuery({
        ...options,
        onError: wrappedOnError,
    });
}

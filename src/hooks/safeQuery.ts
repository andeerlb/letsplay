import { QueryKey, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import { SilentHandledError } from '@tps/errors';

export function useSafeQuery<
    TQueryFnData = unknown,
    TError = unknown,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey
>(
    options: UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>
): UseQueryResult<TData, TError> {
    const wrappedOnError = (error: TError) => {
        options.onError?.(error);
        if (error instanceof SilentHandledError) {
            return new Promise(() => { });
        }
    };

    return useQuery({
        ...options,
        onError: wrappedOnError,
    });
}

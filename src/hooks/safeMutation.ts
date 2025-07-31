import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { SilentHandledError } from '@tps/errors';

export function useSafeMutation<TData = unknown, TError = unknown, TVariables = void>(
    options: UseMutationOptions<TData, TError, TVariables>
): UseMutationResult<TData, TError, TVariables> {
    const wrappedOnError = (error: TError, variables: TVariables, context: unknown) => {
        if (error instanceof SilentHandledError) return;
        options.onError?.(error, variables, context);
    };

    return useMutation({
        ...options,
        onError: wrappedOnError,
    });
}

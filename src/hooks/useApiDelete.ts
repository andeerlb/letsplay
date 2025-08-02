import { fetcher } from '@hooks/apiClient';
import { useSafeMutation } from '@hooks/safeMutation';
import { useToast } from '@hooks/useToast';
import { withApiErrorGuard } from '@hooks/withApiErrorGuard';
import { withConnectionGuard } from '@hooks/withConnectionGuard';
import { useLingui } from '@lingui/react/macro';
import { UseMutationOptions } from '@tanstack/react-query';
import { ApiError } from '@tps/api';

export const useApiDelete = <TPayload = void, TResponse = void>(
    url: string,
    options?: UseMutationOptions<TResponse | undefined, ApiError, TPayload>,
    useAuthApi?: boolean
) => {
    const toast = useToast();
    const { t } = useLingui();

    const guardedMutationFn = withConnectionGuard(
        withApiErrorGuard(
            async (payload) => {
                return fetcher<TResponse>(url, null, {
                    method: 'DELETE',
                    headers: { 'Content-Type': 'application/json' },
                    body: payload ? JSON.stringify(payload) : undefined,
                }, useAuthApi);
            },
            {
                onApiError: () => {
                    toast.error(t`guard.connection.offline`);
                },
            }
        ),
        {
            onOffline: () => {
                toast.error(t`guard.connection.offline`);
            },
        }
    );

    return useSafeMutation<TResponse | undefined, ApiError, TPayload>({
        mutationFn: guardedMutationFn,
        ...options,
    });
};

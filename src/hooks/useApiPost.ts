import { fetcher } from '@hooks/apiClient';
import { useToast } from '@hooks/useToast';
import { withApiErrorGuard } from '@hooks/withApiErrorGuard';
import { withConnectionGuard } from '@hooks/withConnectionGuard';
import { useLingui } from '@lingui/react/macro';
import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import { ApiError } from '@tps/api';

export const useApiPost = <TPayload, TResponse>(
    url: string,
    options?: UseMutationOptions<TResponse | undefined, ApiError, TPayload>
) => {
    const toast = useToast();
    const { t } = useLingui();

    const guardedMutationFn = withConnectionGuard(
        withApiErrorGuard(
            async (payload) => {
                return fetcher<TResponse>(url, null, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });
            },
            {
                onApiError: () => {
                    toast.error(t`guard.connection.api.offline`);
                },
            }
        ),
        {
            onOffline: () => {
                toast.error(t`guard.connection.network.offline`);
            },
        }
    );

    return useMutation<TResponse | undefined, ApiError, TPayload>({
        mutationFn: guardedMutationFn,
        ...options,
    });
};

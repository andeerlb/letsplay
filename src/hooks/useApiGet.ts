import { fetcher } from '@hooks/apiClient';
import { useToast } from '@hooks/useToast';
import { withApiErrorGuard } from '@hooks/withApiErrorGuard';
import { withConnectionGuard } from '@hooks/withConnectionGuard';
import { useLingui } from '@lingui/react/macro';
import { RootState } from '@store/index';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { ApiError } from '@tps/api';
import { useSelector } from 'react-redux';

export const useApiGet = <TResponse>(
    key: string[],
    url: string,
    options?: UseQueryOptions<TResponse | undefined, ApiError>
) => {
    const token = useSelector((state: RootState) => state.token);
    const toast = useToast();
    const { t } = useLingui();

    const guardedQueryFn = withConnectionGuard(
        withApiErrorGuard(
            async () => {
                return fetcher<TResponse>(url, token);
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

    return useQuery<TResponse | undefined, ApiError>({
        queryKey: key,
        queryFn: guardedQueryFn,
        ...options,
    });
};

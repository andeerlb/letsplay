import { ApiError } from '@tps/api';

type ApiErrorGuardOptions = {
    onApiError?: (error: ApiError) => void;
};

export function withApiErrorGuard<TPayload, TResult>(
    fn: (payload: TPayload) => Promise<TResult>,
    options?: ApiErrorGuardOptions
): (payload: TPayload) => Promise<TResult | undefined> {
    return async (payload: TPayload): Promise<TResult | undefined> => {
        try {
            return await fn(payload);
        } catch (error: any) {
            if (error?.status === -1) {
                options?.onApiError?.(error);
                return undefined;
            }
            throw error;
        }
    };
}

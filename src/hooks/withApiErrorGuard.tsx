import { ApiError } from '@tps/api';
import { SilentHandledError } from '@tps/errors';

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
            console.log(error);
            if (error?.status === -1) {
                options?.onApiError?.(error);
                throw new SilentHandledError();
            }
            throw error;
        }
    };
}

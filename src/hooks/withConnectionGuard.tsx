import NetInfo from '@react-native-community/netinfo';
import { SilentHandledError } from '@tps/errors';

type ConnectionGuardOptions = {
    onOffline?: () => void;
};

export function withConnectionGuard<TPayload, TResult>(
    fn: (payload: TPayload) => Promise<TResult>,
    options?: ConnectionGuardOptions
): (payload: TPayload) => Promise<TResult | undefined> {
    return async (payload: TPayload): Promise<TResult | undefined> => {
        const netState = await NetInfo.fetch();

        if (!netState.isConnected || !netState.isInternetReachable) {
            options?.onOffline?.();
            throw new SilentHandledError();
        }

        return fn(payload);
    };
}

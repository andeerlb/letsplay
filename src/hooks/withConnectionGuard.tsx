import NetInfo from '@react-native-community/netinfo';
import { SilentHandledError } from '@tps/errors';

type ConnectionGuardOptions = {
    onOffline?: () => void;
    maxWaitMs?: number; // Max wait time for reachability to stabilize
};

export function withConnectionGuard<TPayload, TResult>(
    fn: (payload: TPayload) => Promise<TResult>,
    options?: ConnectionGuardOptions
): (payload: TPayload) => Promise<TResult | undefined> {
    return async (payload: TPayload): Promise<TResult | undefined> => {
        const maxWaitMs = options?.maxWaitMs ?? 1500;
        const retryInterval = 250;
        let waited = 0;

        let netState = await NetInfo.fetch();

        while (netState.isInternetReachable === null && waited < maxWaitMs) {
            await new Promise(res => setTimeout(res, retryInterval));
            waited += retryInterval;
            netState = await NetInfo.fetch();
        }

        if (!netState.isConnected || netState.isInternetReachable === false) {
            options?.onOffline?.();
            throw new SilentHandledError();
        }

        return fn(payload);
    };
}

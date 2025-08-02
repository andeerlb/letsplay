import { API_PREFIX } from "@constants/api";
import { ApiError, Token } from "@tps/api";
import Config from "react-native-config";

export const fetcher = async <TResponse>(
    url: string,
    token?: Token | null,
    options?: RequestInit,
    useAuthApi?: boolean
): Promise<TResponse> => {
    const headers = {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
        ...(token ? { Authorization: `Bearer ${token.access_token}` } : {}),
    };
    let response;
    try {
        url = `${useAuthApi ? Config.AUTH_API : Config.API + '/' + API_PREFIX}` + url;
        console.log(url);
        response = await fetch(url, {
            ...options,
            headers,
        });
    } catch (err) {
        const error: ApiError = {
            status: -1,
            data: err,
        };
        throw error;
    }

    const content = await response.json().catch(() => ({}));

    if (!response.ok) {
        const error: ApiError = {
            status: response.status,
            data: content,
        };
        throw error;
    }

    return content;
};

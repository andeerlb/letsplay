import { ApiError, Token } from "@tps/api";

export const fetcher = async <TResponse>(
    url: string,
    token?: Token | null,
    options?: RequestInit
): Promise<TResponse> => {
    const headers = {
        'Content-Type': 'application/json',
        ...(options?.headers || {}),
        ...(token ? { Authorization: `Bearer ${token.access_token}` } : {}),
    };

    const response = await fetch(url, {
        ...options,
        headers,
    });

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

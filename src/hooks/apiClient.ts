import { ApiError } from "@types/api";

export const fetcher = async <TResponse>(
    url: string,
    options?: RequestInit
): Promise<TResponse> => {
    const response = await fetch(url, options);
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

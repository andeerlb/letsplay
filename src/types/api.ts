import type { Language, Layout } from "@tps/theme";

export type ApiError = {
    status: number;
    data: any;
};

export type Settings = {
    layout: Layout | null;
    language: Language | null;
};

export type User = {
    givenName: string;
    surname: string;
    nickname: string;
    email: string
}

export type UserCredentials = {
    email: string;
    password: string;
}

export type Token = {
    access_token: string;
    token_type: string;
    refresh_token: string;
    expires_in: number;
    expires_at: number;
}
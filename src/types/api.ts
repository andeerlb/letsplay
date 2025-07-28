import type { Language, Layout } from "@types/theme";

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
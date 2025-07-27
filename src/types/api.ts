import type { Language, Layout } from "@types/theme";

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
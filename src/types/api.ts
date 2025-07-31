import type { Language, Layout } from "@tps/theme";
import { SignUpSportContextType } from "./context";

export type ApiError = {
    status: number;
    data: any;
};

export type Settings = {
    layout: Layout;
    language: Language;
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

export type SignUpRequestType = {
    givenName: string;
    surname: string;
    email: string;
    password: string;
    birthdate: Date;
    preferredSport: SignUpSportContextType;
    otherSports?: SignUpSportContextType[]
}
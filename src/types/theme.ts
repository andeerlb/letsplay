import { DarkTheme, LightTheme } from "@constants/theme";

export type Layout = 'light' | 'dark' | 'system' | null;
export type Language = 'pt' | 'en';

export type FontWeight =
    | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    | "normal"
    | "bold";

export type FontDefinition = {
    fontFamily: string;
    fontWeight: FontWeight;
};

export type Toast = {
    warn: string;
    info: string;
    error: string;
    success: string;
    text: string,
};

export type ThemeDefinition = {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        card: string;
        text: string;
        button: string;
        border: string;
        notification: string;
        formError: string;
    };
    secondaryColors: {
        background: string;
        card: string;
        text: string;
        button: string;
        border: string;
    };
    toast: Toast;
    navigation: {
        active: string;
        inactive: string;
    };
    fonts: {
        regular: FontDefinition;
        medium: FontDefinition;
        semiBold: FontDefinition;
        bold: FontDefinition;
        heavy: FontDefinition;
        logoRegular: FontDefinition;
        logoBold: FontDefinition;
    };
} & ReactNavigation.Theme;

export type Theme = typeof LightTheme | typeof DarkTheme;
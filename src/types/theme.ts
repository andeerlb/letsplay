import { DarkTheme, LightTheme } from "@constants/theme";

export type Layout = 'light' | 'dark' | 'system';
export type Language = 'pt' | 'en';

export type FontWeight =
    | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
    | "normal"
    | "bold";

export type FontDefinition = {
    fontFamily: string;
    fontWeight: FontWeight;
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
    },
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
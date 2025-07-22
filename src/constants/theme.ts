import { msg } from "@lingui/core/macro";

export const FontDefinition = {
    general: {
        regular: 'Lexend-Regular',
        medium: 'Lexend-Medium',
        semiBold: 'Lexend-SemiBold',
        bold: 'Lexend-Bold',
        extraBold: 'Lexend-ExtraBold',
    },
    logo: {
        regular: 'Armavir01-Regular',
        bold: 'Armavir01-Bold',
    }
}

export const LightTheme = {
  general: {
    primary: '#646F7B',
    secondary: '#256b35'
  },
  primary: {
    background: '#ffffff',
    text: '#000000',
    button: '#646F7B',
  },
  secondary: {
    background: '#EAEDF0',
    text: '#646F7B',
    button: '#1A1B1D',
  }
};

export const DarkTheme = {
  general: {
    primary: '#fff',
    secondary: '#256b35',
  },
  primary: {
    background: '#141b22',
    text: '#ffffff',
    button: '#ccc',
  },
  secondary: {
    background: '#1e2833',
    text: '#ccc',
    button: '#84a9d3ff',
  }
};

export type Theme = typeof LightTheme | typeof DarkTheme;

export const THEME_OPTIONS = [
    { label: msg`DARK`, value: 'dark' },
    { label: msg`LIGHT`, value: 'light' },
    { label: msg`SYSTEM`, value: 'system' },
];

export const LANGUAGE_OPTIONS = [
    { label: msg`PORTUGUESE`, value: 'pt' },
    { label: msg`ENGLISH`, value: 'en' },
];
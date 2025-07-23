import { msg } from "@lingui/core/macro";
import * as ReactNavigation from '@react-navigation/native';

type FontWeight =
  | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
  | "normal"
  | "bold";

type FontDefinition = {
  fontFamily: string;
  fontWeight: FontWeight;
};

type ThemeDefinition = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    button: string;
    border: string;
    notification: string;
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

const FONTS: ThemeDefinition["fonts"] = {
  regular: {
    fontFamily: 'Lexend-Regular',
    fontWeight: '400',
  },
  medium: {
    fontFamily: 'Lexend-Medium',
    fontWeight: '500',
  },
  semiBold: {
    fontFamily: 'Lexend-SemiBold',
    fontWeight: '600',
  },
  bold: {
    fontFamily: 'Lexend-Bold',
    fontWeight: '600',
  },
  heavy: {
    fontFamily: 'Lexend-Bold',
    fontWeight: '700',
  },
  logoBold: {
    fontFamily: "Armavir01-Bold",
    fontWeight: '900',
  },
  logoRegular: {
    fontFamily: 'Armavir01',
    fontWeight: '500',
  },
};

export const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#646F7B',
    secondary: '#256b35',
    background: '#ffffff',
    card: '#ffffff',
    text: '#000000',
    button: '#646F7B',
    border: 'rgb(199, 199, 204)',
    notification: '#256b35',
  },
  secondaryColors: {
    background: '#EAEDF0',
    card: '#84a9d3ff',
    text: '#646F7B',
    button: '#1A1B1D',
    border: 'rgb(199, 199, 204)',
  },
  fonts: FONTS,
};

export const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#fff',
    secondary: '#256b35',
    background: '#141b22',
    card: '#84a9d3ff',
    text: '#ffffff',
    button: '#ccc',
    border: 'rgb(199, 199, 204)',
    notification: '#256b35',
  },
  secondaryColors: {
    background: '#1e2833',
    card: '#84a9d3ff',
    text: '#ccc',
    button: '#84a9d3ff',
    border: 'rgb(199, 199, 204)',
  },
  fonts: FONTS
};

export type Theme = typeof LightTheme | typeof DarkTheme;

export const THEME_OPTIONS = [
  { label: msg`screen.setting.theme.dark`, value: 'dark' },
  { label: msg`screen.setting.theme.light`, value: 'light' },
  { label: msg`screen.setting.theme.system`, value: 'system' },
];

export const LANGUAGE_OPTIONS = [
  { label: msg`screen.setting.language.portuguese`, value: 'pt' },
  { label: msg`screen.setting.language.english`, value: 'en' },
];

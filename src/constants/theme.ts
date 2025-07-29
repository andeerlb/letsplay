import { msg } from "@lingui/core/macro";
import type { ThemeDefinition } from "@tps/theme";

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
    button: '#256b35',
    border: '#c7c7ccff',
    notification: '#256b35',
    formError: 'red'
  },
  secondaryColors: {
    background: '#EAEDF0',
    card: '#84a9d3ff',
    text: '#646F7B',
    button: '#1A1B1D',
    border: '#D3DCE9',
  },
  toast: {
    warn: '#fa4700ff',
    info: '#84a9d3ff',
    error: '#db1818ff',
    success: '#256b35',
    text: '#fff',
  },
  navigation: {
    active: '#1e2833',
    inactive: '#646F7B',
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
    button: '#256b35',
    border: '#3B4C67',
    notification: '#256b35',
    formError: '#db1818ff'
  },
  secondaryColors: {
    background: '#1e2833',
    card: '#84a9d3ff',
    text: '#ccc',
    button: '#84a9d3ff',
    border: 'rgb(199, 199, 204)',
  },
  toast: {
    warn: '#fa4700ff',
    info: '#141b22',
    error: '#db1818ff',
    success: '#256b35',
    text: '#fff',
  },
  navigation: {
    active: '#84a9d3ff',
    inactive: '#fff',
  },
  fonts: FONTS
};

export const THEME_OPTIONS = [
  { label: msg`screen.setting.theme.dark`, value: 'dark' },
  { label: msg`screen.setting.theme.light`, value: 'light' },
  { label: msg`screen.setting.theme.system`, value: 'system' },
];

export const LANGUAGE_OPTIONS = [
  { label: msg`screen.setting.language.portuguese`, value: 'pt' },
  { label: msg`screen.setting.language.english`, value: 'en' },
];

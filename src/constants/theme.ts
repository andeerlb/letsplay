import { msg } from "@lingui/core/macro";

type FontDefinition = {
  fontFamily: string,
  fontWeight: string
};

type ThemeDefinition = {
  colors: {
    secondary: string;
    button: string
  },
  fonts: {
    semiBold: FontDefinition;
  }
} & ReactNavigation.Theme;

// export const LightTheme = {
//   general: {
//     primary: '#646F7B',
//     secondary: '#256b35'
//   },
//   primary: {
//     background: '#ffffff',
//     text: '#000000',
//     button: '#646F7B',
//   },
//   secondary: {
//     background: '#EAEDF0',
//     text: '#646F7B',
//     button: '#1A1B1D',
//   }
// };

export const LightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#646F7B',
    secondary: '#256b35',
    background: '#ffffff',
    card: '#84a9d3ff',
    text: '#000000',
    button: '#646F7B',
    border: 'rgb(199, 199, 204)',
    notification: '#256b35',
  },
  fonts: {
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
  }
};

// export const DarkTheme ={
//   general: {
//     primary: '#fff',
//     secondary: '#256b35',
//   },
//   primary: {
//     background: '#141b22',
//     text: '#ffffff',
//     button: '#ccc',
//   },
//   secondary: {
//     background: '#1e2833',
//     text: '#ccc',
//     button: '#84a9d3ff',
//   }
// };

export const DarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: '#fff',
    secondary: '#256b35',
    background: '#1e2833',
    card: '#84a9d3ff',
    text: '#ccc',
    button: '#84a9d3ff',
    border: 'rgb(199, 199, 204)',
    notification: '#256b35',
  },
  fonts: {
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
  }
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
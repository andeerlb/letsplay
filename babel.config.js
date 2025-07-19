module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    '@lingui/babel-plugin-lingui-macro',
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@src': './src',
          '@assets': './assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@types': './src/types',
          '@locales': './locales',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@utils': './src/utils',
          '@context': './src/context',
        },
      },
    ],
  ],
};


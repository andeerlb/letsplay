module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
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
        },
      },
    ],
  ],
};


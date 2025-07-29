const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { sourceExts } = defaultConfig.resolver;

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');

const config = {
  transformer: {
    babelTransformerPath: require.resolve('./metro.transformer.js'),
  },
  resolver: {
    sourceExts: [...sourceExts, "svg", "po", "pot", "lottie"],
  },
};

module.exports = mergeConfig(defaultConfig, config);
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const { sourceExts } = defaultConfig.resolver;

defaultConfig.resolver.assetExts = defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg');

const config = {
  transformer: {
    babelTransformerPath: require.resolve("@lingui/metro-transformer/react-native"),
  },
  resolver: {
    sourceExts: [...sourceExts, "svg", "po", "pot"],
  },
};

module.exports = mergeConfig(defaultConfig, config);
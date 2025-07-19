const svgTransformer = require('react-native-svg-transformer');
const linguiTransformer = require("@lingui/metro-transformer/react-native");

module.exports.transform = function ({ src, filename, options }) {
  if (filename.endsWith('.svg')) {
    return svgTransformer.transform({ src, filename, options });
  }
  return linguiTransformer.transform({ src, filename, options });
};

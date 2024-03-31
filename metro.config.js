const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const svgTransformerConfig = async () => {
  const {
    resolver: {sourceExts, assetExts},
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  };
};

const mergedConfig = async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const svgConfig = await svgTransformerConfig();
  return mergeConfig(defaultConfig, svgConfig);
};

module.exports = mergedConfig();

// const path = require('path')
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
// const resolveFrom = require('resolve-from')
const webpack = require('webpack')

const fixLinkedDependencies = (config) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      // react$: resolveFrom(path.resolve('node_modules'), 'react'),
      // 'react-dom$': resolveFrom(path.resolve('node_modules'), 'react-dom'),
    },
  };
  config.resolve.plugins = config.resolve.plugins.filter(
    (plugin) => !(plugin instanceof ModuleScopePlugin)
  );
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
  ];
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    buffer: require.resolve("buffer"),
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
  });
  config.resolve.fallback = fallback;
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};

module.exports = [fixLinkedDependencies];

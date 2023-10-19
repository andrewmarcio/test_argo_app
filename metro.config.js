const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path'); 
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */

const extraNodeModules = {
    domain: path.resolve(__dirname + "/src/domain"),
    infra: path.resolve(__dirname + "/src/infra"),
    presentation: path.resolve(__dirname + "/src/presentation"),
};

const watchFolders = [
    path.resolve(__dirname + "/src/domain"),
    path.resolve(__dirname + "/src/infra"),
    path.resolve(__dirname + "/src/presentation"),
];

const config = {
    resolver: {
        extraNodeModules,
    },
    watchFolders,
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

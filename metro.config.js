const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Ensure proper module resolution
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Add resolver configuration
config.resolver.resolverMainFields = ['react-native', 'browser', 'main'];

module.exports = config;

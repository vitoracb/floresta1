const { withExpo } = require('@expo/next-adapter');

module.exports = withExpo({
  transpilePackages: [
    'react-native',
    'react-native-web',
    'expo',
    // Adicione outros pacotes se necessário
  ],
  experimental: {
    forceSwcTransforms: true,
  },
}); 
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@routes/hooks': './src/routes/hooks',
          '@store': './src/store',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@store/auth': './src/store/auth',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};

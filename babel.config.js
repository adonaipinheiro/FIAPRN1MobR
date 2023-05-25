module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
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
          '@store/auth': './src/store/auth',
        },
      },
    ],
  ],
};

import {Appearance} from 'react-native';

const $COLOR_LIGHT = {
  primary: '#e91c5d',
  primaryDark: '#ba1247',
  white: '#f2f2f2',
  black: '#000000',
  success: '#4BB543',
  error: '#ff3333',
  info: '#0077b6',
  blackWithOpacity: (opacity = 0) => `#000${opacity}`,
};

const $COLOR_DARK = {
  primary: '#ba1247',
  primaryDark: '#000',
  white: '#f2f2f2',
  black: '#000000',
  success: '#4BB543',
  error: '#ff3333',
  info: '#0077b6',
  blackWithOpacity: (opacity = 0) => `#000${opacity}`,
};

export const $COLORS =
  Appearance.getColorScheme() === 'light' ? $COLOR_LIGHT : $COLOR_DARK;

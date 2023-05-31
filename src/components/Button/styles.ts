import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
  },
  loading: {
    opacity: 0.7,
  },
  primary: {
    backgroundColor: $COLORS.white,
  },
  secondary: {
    backgroundColor: 'transparent',
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  textButtonPrimary: {
    color: $COLORS.primaryDark,
  },
  textButtonSecondary: {
    color: $COLORS.white,
  },
});

export default styles;

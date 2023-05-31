import {StyleSheet} from 'react-native';

import {$COLORS} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 40,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: $COLORS.white,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: $COLORS.white,
  },
});

export default styles;

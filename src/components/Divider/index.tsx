import React, {memo} from 'react';
import {View} from 'react-native';

interface DividerProps {
  size: number;
  horizontal?: boolean;
}

import styles from './styles';

export const Divider = memo(({size, horizontal = false}: DividerProps) => {
  return <View style={styles(size, horizontal).container} />;
});

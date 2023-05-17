import React, {memo} from 'react';
import {View} from 'react-native';

// Interface
interface DividerProps {
  size: number;
  horizontal?: boolean;
}

// Styles
import styles from './styles';

export const Divider = memo(({size, horizontal = false}: DividerProps) => {
  return <View style={styles(size, horizontal).container} />;
});

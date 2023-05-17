import React, {PropsWithChildren, memo} from 'react';
import LinearGradient from 'react-native-linear-gradient';

// Interface
interface GradientBackgroundProps extends PropsWithChildren {}

// Styles
import styles, {colors} from './styles';

export const GradientBackground = memo(
  ({children}: GradientBackgroundProps) => {
    return (
      <LinearGradient style={styles.container} colors={colors}>
        {children}
      </LinearGradient>
    );
  },
);

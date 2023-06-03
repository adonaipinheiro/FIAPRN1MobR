import React, {useMemo} from 'react';
import type {TextStyle, ViewStyle} from 'react-native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import {$COLORS} from '@utils';

type ToastTypes = 'success' | 'error' | 'info';

export function useToast() {
  const styles = useMemo(
    () => ({
      success: {borderLeftColor: $COLORS.success} as ViewStyle,
      error: {borderLeftColor: $COLORS.error} as ViewStyle,
      info: {borderLeftColor: $COLORS.info} as ViewStyle,
      text1: {fontSize: 16} as TextStyle,
      text2: {fontSize: 14} as TextStyle,
    }),
    [],
  );

  const toastConfig = useMemo(
    () => ({
      success: (props: BaseToastProps) => (
        <BaseToast
          {...props}
          style={styles.success}
          text1Style={styles.text1}
          text2Style={styles.text2}
        />
      ),
      error: (props: BaseToastProps) => (
        <ErrorToast
          {...props}
          style={styles.error}
          text1Style={styles.text1}
          text2Style={styles.text2}
        />
      ),
      info: (props: BaseToastProps) => (
        <InfoToast
          {...props}
          style={styles.info}
          text1Style={styles.text1}
          text2Style={styles.text2}
        />
      ),
    }),
    [styles.error, styles.info, styles.success, styles.text1, styles.text2],
  );

  function toast(type: ToastTypes, text1: string, text2: string) {
    Toast.show({type, text1, text2});
  }

  return {
    toastConfig,
    toast,
  };
}

import React, {memo} from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native';

interface InputProps extends TextInputProps {
  error?: string;
}

import styles from './styles';

export const Input = memo(({error, ...props}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        placeholderTextColor={'#F2F2F290'}
        {...props}
      />
      {error && <Text style={styles.errorText}>* {error}</Text>}
    </View>
  );
});

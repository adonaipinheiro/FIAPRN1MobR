import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {Divider, GradientBackground} from '@components';
import {$COLORS} from '@utils';

import styles from './styles';

export function LoadingScreen() {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={10} />
        <ActivityIndicator color={$COLORS.white} />
      </View>
    </GradientBackground>
  );
}

import React from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';

import {Button, Divider, GradientBackground, Input} from '@components';

import styles from './styles';
import {useSignIn} from './useSignIn';

const SignIn = () => {
  const {signIn, goToSignUp} = useSignIn();

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={32} />
        <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
        <Divider size={12} />
        <Input placeholder="Digite sua senha" secureTextEntry />
        <Divider size={24} />
        <Button onPress={signIn} text="Entrar" />
        <Divider size={12} />
        <Button
          onPress={goToSignUp}
          text="Não possui conta? Clique aqui"
          primary={false}
        />
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export {SignIn};

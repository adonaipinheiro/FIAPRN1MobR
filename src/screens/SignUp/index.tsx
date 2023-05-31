import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';

import {Button, Divider, GradientBackground, Input} from '@components';
import {useToast} from '@hooks';
import {UnloggedRouteProps} from '@routes';
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

import styles from './styles';

const SignUp = () => {
  const navigation = useNavigation<UnloggedRouteProps>();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const {toast} = useToast();

  function signUp() {
    dispatch(setLogged(!isLogged));
    toast('success', 'Cadastro realizado com sucesso!', 'Bem-vindo(a) a FIAP');
  }

  function goToSignIn() {
    navigation.popToTop();
  }

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={32} />
        <Input placeholder="Digite seu nome" autoCapitalize="words" />
        <Divider size={12} />
        <Input placeholder="Digite seu e-mail" keyboardType="email-address" />
        <Divider size={12} />
        <Input placeholder="Digite sua senha" secureTextEntry />
        <Divider size={12} />
        <Input placeholder="Repita sua senha" secureTextEntry />
        <Divider size={24} />
        <Button onPress={signUp} text="Cadastrar" />
        <Divider size={12} />
        <Button
          onPress={goToSignIn}
          text="Já possui conta? Clique aqui"
          primary={false}
        />
      </KeyboardAvoidingView>
    </GradientBackground>
  );
};

export {SignUp};

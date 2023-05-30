import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Components
import {Button, Divider, GradientBackground, Input} from '@components';

// Styles
import styles from './styles';

// Store
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

// Routes Props
import {UnloggedRouteProps} from '@routes';

const SignUp = () => {
  const navigation = useNavigation<UnloggedRouteProps>();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);

  function signUp() {
    dispatch(setLogged(!isLogged));
  }

  function goToSignIn() {
    navigation.popToTop();
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </GradientBackground>
  );
};

export {SignUp};

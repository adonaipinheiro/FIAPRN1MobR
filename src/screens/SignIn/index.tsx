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

// Route Props
import {UnloggedRouteProps} from '@routes';

const SignIn = () => {
  const navigation = useNavigation<UnloggedRouteProps>();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);

  function signIn() {
    dispatch(setLogged(!isLogged));
  }

  function goToSignUp() {
    navigation.push('SignUp');
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
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
      </SafeAreaView>
    </GradientBackground>
  );
};

export {SignIn};

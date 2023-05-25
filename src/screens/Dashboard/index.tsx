import React from 'react';
import {SafeAreaView, Text} from 'react-native';

// Components
import {Button, Divider, GradientBackground} from '@components';

// Styles
import styles from './styles';

// Store
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);

  function signIn() {
    dispatch(setLogged(!isLogged));
  }

  return (
    <GradientBackground>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={32} />
        <Button onPress={signIn} text="Voltar pro Login" />
      </SafeAreaView>
    </GradientBackground>
  );
};

export {Dashboard};

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {Button, Divider} from '@components';
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

import styles from './styles';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);

  function signIn() {
    dispatch(setLogged(!isLogged));
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>FIAP</Text>
      <Text style={styles.subTitle}>Educação que transforma!</Text>
      <Divider size={32} />
      <Button primary onPress={signIn} text="Voltar pro Login" />
    </SafeAreaView>
  );
};

export {Dashboard};

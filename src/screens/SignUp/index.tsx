import {Formik} from 'formik';
import React from 'react';
import {KeyboardAvoidingView, Platform, Text} from 'react-native';

import {Button, Divider, GradientBackground, Input} from '@components';

import styles from './styles';
import {useSignUp} from './useSignUp';

const SignUp = () => {
  const {signUp, goToSignIn, initialValues, SignUpSchema} = useSignUp();

  return (
    <GradientBackground>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <Text style={styles.title}>FIAP</Text>
        <Text style={styles.subTitle}>Educação que transforma!</Text>
        <Divider size={32} />
        <Formik
          initialValues={initialValues}
          validationSchema={SignUpSchema}
          onSubmit={({name, email, pass}, {setSubmitting}) =>
            signUp(name, email, pass, setSubmitting)
          }>
          {({handleSubmit, errors, values, isSubmitting, handleChange}) => (
            <>
              <Input
                value={values.name}
                onChangeText={handleChange('name')}
                error={errors.name}
                placeholder="Digite seu nome"
                autoCapitalize="words"
              />
              <Divider size={12} />
              <Input
                value={values.email}
                onChangeText={handleChange('email')}
                error={errors.email}
                placeholder="Digite seu e-mail"
                keyboardType="email-address"
              />
              <Divider size={12} />
              <Input
                value={values.pass}
                onChangeText={handleChange('pass')}
                error={errors.pass}
                placeholder="Digite sua senha"
                secureTextEntry
              />
              <Divider size={12} />
              <Input
                value={values.confirmPass}
                onChangeText={handleChange('confirmPass')}
                error={errors.confirmPass}
                placeholder="Repita sua senha"
                secureTextEntry
              />
              <Divider size={24} />
              <Button
                onPress={handleSubmit}
                loading={isSubmitting}
                text="Cadastrar"
              />
            </>
          )}
        </Formik>
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

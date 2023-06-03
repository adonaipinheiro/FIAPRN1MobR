import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {useToast} from '@hooks';
import {UnloggedRouteProps} from '@routes';
import {useServices} from '@services';

export function useSignIn() {
  const navigation = useNavigation<UnloggedRouteProps>();
  const {signInUserWithEmail} = useServices();
  const {toast} = useToast();

  const initialValues = {email: '', pass: ''};

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor, insira um e-mail válido!')
      .required('O campo não pode estar em vazio'),
    pass: Yup.string().required('O campo não pode estar em vazio'),
  });

  function signIn(
    email: string,
    pass: string,
    setSubmitting: (isSubmitting: boolean) => void,
  ) {
    signInUserWithEmail(email, pass)
      .then(() => {
        toast('success', 'Bem-vindo(a) a FIAP', 'Educação que transforma!');
      })
      .catch(_ => {
        toast(
          'error',
          'Não conseguimos entrar :(',
          'Por favor, tente novamente!',
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  function goToSignUp() {
    navigation.push('SignUp');
  }

  return {
    signIn,
    goToSignUp,
    initialValues,
    SignInSchema,
  };
}

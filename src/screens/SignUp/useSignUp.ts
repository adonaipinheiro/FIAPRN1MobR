import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {useToast} from '@hooks';
import {UnloggedRouteProps} from '@routes';
import {useServices} from '@services';

export function useSignUp() {
  const navigation = useNavigation<UnloggedRouteProps>();
  const {createUserWithEmailAndPass} = useServices();
  const {toast} = useToast();

  const initialValues = {
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
  };

  const SignUpSchema = Yup.object().shape({
    name: Yup.string().required('O campo não pode estar em vazio'),
    email: Yup.string()
      .email('Por favor, insira um e-mail válido!')
      .required('O campo não pode estar em vazio'),
    pass: Yup.string().required('O campo não pode estar em vazio'),
    confirmPass: Yup.string()
      .oneOf([Yup.ref('pass')], 'As senhas não correspondem')
      .required('Campo obrigatório'),
  });

  function signUp(
    name: string,
    email: string,
    pass: string,
    setSubmitting: (isSubmitting: boolean) => void,
  ) {
    createUserWithEmailAndPass(name, email, pass)
      .then(() => {
        toast(
          'success',
          'Cadastro realizado com sucesso!',
          'Bem-vindo(a) a FIAP',
        );
      })
      .catch(_ => {
        toast(
          'error',
          'Cadastro não realizado!',
          'Não foi possível cadastrar no momento.',
        );
      })
      .finally(() => {
        setSubmitting(false);
      });
  }

  function goToSignIn() {
    navigation.popToTop();
  }

  return {
    signUp,
    goToSignIn,
    initialValues,
    SignUpSchema,
  };
}

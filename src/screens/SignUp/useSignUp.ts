import {useNavigation} from '@react-navigation/native';

import {useToast} from '@hooks';
import {UnloggedRouteProps} from '@routes';
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

export function useSignUp() {
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

  return {
    signUp,
    goToSignIn,
  };
}

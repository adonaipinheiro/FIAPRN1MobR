import {useNavigation} from '@react-navigation/native';

import {useToast} from '@hooks';
import {UnloggedRouteProps} from '@routes';
import {useAppDispatch, useAppSelector} from '@store';
import {setLogged} from '@store/auth/authSlice';

export function useSignIn() {
  const navigation = useNavigation<UnloggedRouteProps>();
  const dispatch = useAppDispatch();
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const {toast} = useToast();

  function signIn() {
    dispatch(setLogged(!isLogged));
    toast('success', 'Bem-vindo(a) a FIAP', 'Educação que transforma!');
  }

  function goToSignUp() {
    navigation.push('SignUp');
  }

  return {
    signIn,
    goToSignUp,
  };
}

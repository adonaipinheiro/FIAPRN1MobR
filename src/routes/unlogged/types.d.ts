import type {StackNavigationProp} from '@react-navigation/stack';

export type IUnloggedStack = {
  SignIn: undefined;
  SignUp: undefined;
};

export type UnloggedRouteProps = StackNavigationProp<IUnloggedStack>;

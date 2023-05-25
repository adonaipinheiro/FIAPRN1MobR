import type {StackNavigationProp} from '@react-navigation/stack';

export type IAuthStack = {
  SignIn: undefined;
};

export type AuthRouteProps = StackNavigationProp<IAuthStack>;

import type {NavigatorScreenParams} from '@react-navigation/native';

import type {ILoggedDrawer} from './drawer/types';

export type ILoggedStack = {
  Drawer: NavigatorScreenParams<ILoggedDrawer>;
};

export type LoggedRouteProps = StackNavigationProp<ILoggedStack>;

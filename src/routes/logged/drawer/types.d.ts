import type {DrawerNavigationProp} from '@react-navigation/drawer';

export type ILoggedDrawer = {
  Dashboard: undefined;
  Maps: undefined;
};

export type LoggedDrawerRouteProps = DrawerNavigationProp<ILoggedDrawer>;

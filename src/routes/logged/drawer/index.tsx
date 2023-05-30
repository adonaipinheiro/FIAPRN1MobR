import React from 'react';
import {
  DrawerNavigationOptions,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome5';

// Screens
import {Dashboard} from '@screens';

// Utils
import {$COLORS} from '@utils';

const Drawer = createDrawerNavigator();

const renderIcon = (color: string, name: string) => (
  <Icon name={name} color={color} size={16} />
);

const drawerOptions: DrawerNavigationOptions = {
  headerTintColor: $COLORS.white,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: $COLORS.primary,
  },
  drawerActiveTintColor: $COLORS.primary,
  drawerType: 'front',
};

export function LoggedDrawer() {
  return (
    <Drawer.Navigator screenOptions={drawerOptions}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: 'Início',
          headerTitleAlign: 'center',
          headerTitle: 'FIAP',
          drawerIcon: ({color}) => renderIcon(color, 'home'),
        }}
        component={Dashboard}
      />
    </Drawer.Navigator>
  );
}

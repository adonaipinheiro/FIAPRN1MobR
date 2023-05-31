import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {LoggedDrawer} from './drawer';
import type {ILoggedStack} from './types';

const Stack = createStackNavigator<ILoggedStack>();

export function LoggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="Drawer" component={LoggedDrawer} />
    </Stack.Navigator>
  );
}

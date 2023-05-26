import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Types
import type {ILoggedStack} from './types';

// Screens
import {LoggedDrawer} from './drawer';

const Stack = createStackNavigator<ILoggedStack>();

export function LoggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={LoggedDrawer} />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Types
import type {IUnloggedStack} from './types';

// Screens
import {SignIn} from '@screens';

const Stack = createStackNavigator<IUnloggedStack>();

export function UnloggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Types
import type {IAuthStack} from './types';

// Screens
import {SignIn} from '@screens';

const Stack = createStackNavigator<IAuthStack>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}

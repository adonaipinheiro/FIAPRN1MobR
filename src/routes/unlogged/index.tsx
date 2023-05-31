import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {SignIn, SignUp} from '@screens';
import {$COLORS} from '@utils';

import type {IUnloggedStack} from './types';

const Stack = createStackNavigator<IUnloggedStack>();

export function UnloggedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTintColor: $COLORS.white,
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: $COLORS.primary,
          },
          headerTitle: '',
          headerBackTitle: ' ',
        }}
        name="SignUp"
        component={SignUp}
      />
    </Stack.Navigator>
  );
}

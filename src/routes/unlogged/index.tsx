import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Types
import type {IUnloggedStack} from './types';

// Screens
import {SignIn, SignUp} from '@screens';

// Utils
import {$COLORS} from '@utils';

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

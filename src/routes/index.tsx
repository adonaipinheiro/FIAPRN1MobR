import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import {UnloggedStack} from './unlogged';
import {LoggedStack} from './logged';

// Store
import {useAppSelector} from '@store';

export function Routes() {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  return (
    <NavigationContainer>
      {isLogged ? <UnloggedStack /> : <LoggedStack />}
    </NavigationContainer>
  );
}

export type {LoggedRouteProps} from './logged/types';
export type {UnloggedRouteProps} from './unlogged/types';
export type {LoggedDrawerRouteProps} from './logged/drawer/types';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import {UnloggedStack} from './unlogged';
import {LoggedStack} from './logged';

// Hook
import {useRoutes} from './useRoutes';

export function Routes() {
  const {isLogged, navigationRef, onScreenReady, onScreenStateChange} =
    useRoutes();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onScreenReady}
      onStateChange={onScreenStateChange}>
      {isLogged ? <LoggedStack /> : <UnloggedStack />}
    </NavigationContainer>
  );
}

export type {LoggedRouteProps} from './logged/types';
export type {UnloggedRouteProps} from './unlogged/types';
export type {LoggedDrawerRouteProps} from './logged/drawer/types';

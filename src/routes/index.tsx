import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {LoadingScreen} from '@components';

import {LoggedStack} from './logged';
import {UnloggedStack} from './unlogged';
import {useRoutes} from './useRoutes';

export function Routes() {
  const {
    user,
    initializing,
    navigationRef,
    onScreenReady,
    onScreenStateChange,
  } = useRoutes();

  if (initializing) return <LoadingScreen />;

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onScreenReady}
      onStateChange={onScreenStateChange}>
      {user ? <LoggedStack /> : <UnloggedStack />}
    </NavigationContainer>
  );
}

export type {LoggedRouteProps} from './logged/types';
export type {UnloggedRouteProps} from './unlogged/types';
export type {LoggedDrawerRouteProps} from './logged/drawer/types';

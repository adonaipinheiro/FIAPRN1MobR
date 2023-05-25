import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// Routes
import {AuthStack} from './auth';
import {LoggedStack} from './logged';

// Store
import {useAppSelector} from '@store';

export function Routes() {
  const isLogged = useAppSelector(state => state.auth.isLogged);

  return (
    <NavigationContainer>
      {isLogged ? <AuthStack /> : <LoggedStack />}
    </NavigationContainer>
  );
}

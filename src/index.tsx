import React from 'react';
import {StatusBar} from 'react-native';

// Screens
import {SignIn} from './screens';

export default function App() {
  return (
    <>
      <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor={'transparent'}
      />
      <SignIn />
    </>
  );
}

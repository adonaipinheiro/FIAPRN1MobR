import React from 'react';
import {StatusBar} from 'react-native';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';

import {useAPP} from '@hooks';
import {Routes} from '@routes';
import {store} from '@store';
import {$COLORS} from '@utils';

export default function App() {
  const {toastConfig} = useAPP();

  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={$COLORS.primaryDark}
      />
      <Routes />
      <Toast config={toastConfig} position="bottom" visibilityTime={2000} />
    </Provider>
  );
}

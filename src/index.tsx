import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';

import Toast from 'react-native-toast-message';

// Routes
import {Routes} from '@routes';

// Store
import {store} from '@store';

// Utils
import {$COLORS} from '@utils';

// Hooks
import {useAPP} from '@hooks';

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

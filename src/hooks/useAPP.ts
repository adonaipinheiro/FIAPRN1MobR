import crashlytics from '@react-native-firebase/crashlytics';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {useToast} from './useToast';

export function useAPP() {
  const {toastConfig} = useToast();

  useEffect(() => {
    SplashScreen.hide();
    crashlytics().log('App mounted.');
  }, []);

  return {
    toastConfig,
  };
}

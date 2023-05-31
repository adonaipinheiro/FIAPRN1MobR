import crashlytics from '@react-native-firebase/crashlytics';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {useNotifications} from './useNotifications';
import {usePermissions} from './usePermissions';
import {useToast} from './useToast';

export function useAPP() {
  const {toastConfig} = useToast();
  const {checkNotificationPermission, requestAPPTracking} = usePermissions();
  useNotifications();

  checkNotificationPermission();
  requestAPPTracking();

  useEffect(() => {
    SplashScreen.hide();
    crashlytics().log('App mounted.');
  }, []);

  return {
    toastConfig,
  };
}

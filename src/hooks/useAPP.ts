import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Alert, Platform} from 'react-native';
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

  useEffect(() => {
    if (Platform.OS === 'android') {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        Alert.alert(
          'A new FCM message arrived!',
          JSON.stringify(remoteMessage),
        );
      });

      return unsubscribe;
    }
  }, []);

  return {
    toastConfig,
  };
}

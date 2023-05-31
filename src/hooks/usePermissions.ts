import crashlytics from '@react-native-firebase/crashlytics';
import {Platform} from 'react-native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

export function usePermissions() {
  function requestNotificationPermission() {
    request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then()
      .catch(err => {
        crashlytics().recordError(err);
      });
  }

  function checkNotificationPermission() {
    check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
      .then(results => {
        if (results === RESULTS.GRANTED) return;
        requestNotificationPermission();
      })
      .catch(err => {
        crashlytics().recordError(err);
      });
  }

  function requestAPPTracking() {
    if (Platform.OS !== 'ios') return;
    request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
      .then()
      .catch(err => {
        crashlytics().recordError(err);
      });
  }

  return {
    checkNotificationPermission,
    requestAPPTracking,
  };
}

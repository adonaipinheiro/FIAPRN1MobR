import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import {Platform} from 'react-native';

export function useNotifications() {
  async function getDeviceToken() {
    const token = await messaging().getToken();
    console.log(token);
  }

  useEffect(() => {
    if (Platform.OS === 'android') {
      getDeviceToken();
    }
  }, []);
}

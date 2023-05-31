import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';

export function useNotifications() {
  async function getDeviceToken() {
    const token = await messaging().getToken();
    console.log(token);
  }

  useEffect(() => {
    getDeviceToken();
  }, []);
}

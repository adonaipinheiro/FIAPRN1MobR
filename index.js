/**
 * @format
 */

import 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {AppRegistry, Platform} from 'react-native';

import {name as appName} from './app.json';
import App from './src';

if (Platform.OS === 'android') {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
}

AppRegistry.registerComponent(appName, () => App);

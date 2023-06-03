import analytics from '@react-native-firebase/analytics';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useNavigationContainerRef} from '@react-navigation/native';
import {useEffect, useRef, useState} from 'react';

import {useAppSelector} from '@store';

export function useRoutes() {
  const routeNameRef = useRef<string>();
  const navigationRef = useNavigationContainerRef();
  const isLogged = useAppSelector(state => state.auth.isLogged);
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  function onAuthStateChanged(userLogged: FirebaseAuthTypes.User | null) {
    setUser(userLogged);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onScreenReady() {
    routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
  }

  async function onScreenStateChange() {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }
    routeNameRef.current = currentRouteName;
  }

  return {
    isLogged,
    user,
    initializing,
    navigationRef,
    onScreenReady,
    onScreenStateChange,
  };
}

import {useRef} from 'react';
import analytics from '@react-native-firebase/analytics';
import {useNavigationContainerRef} from '@react-navigation/native';

// Store
import {useAppSelector} from '@store';

export function useRoutes() {
  const routeNameRef = useRef<String>();
  const navigationRef = useNavigationContainerRef();
  const isLogged = useAppSelector(state => state.auth.isLogged);

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
    navigationRef,
    onScreenReady,
    onScreenStateChange,
  };
}

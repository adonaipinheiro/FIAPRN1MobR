import {useNavigation as useNavigationRN} from '@react-navigation/native';

import type {AuthRouteProps} from '../auth/types';

export function useNavigation() {
  const navigation = useNavigationRN<AuthRouteProps>();
  return navigation;
}

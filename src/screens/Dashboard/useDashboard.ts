import {useEffect, useState} from 'react';
import {Keyboard} from 'react-native';

import {useToast} from '@hooks';
import {useServices} from '@services';
import {
  useLazyListUserReposQuery,
  useListUserReposQuery,
} from '@store/services/githubApi';
import {ListUserReposType} from 'src/services/useServices';

export function useDashboard() {
  const {listUserRepos} = useServices();
  const [userProfile, setUserProfile] = useState<string>('');
  const [repos, setRepos] = useState<ListUserReposType>([]);
  const {data, error, isLoading} = useListUserReposQuery('github');
  const {toast} = useToast();
  const [trigger, result] = useLazyListUserReposQuery();

  const getRepos = () => {
    Keyboard.dismiss();
    if (userProfile === '') {
      toast('info', 'Atenção!', 'Usuário não informado');
      return;
    }

    trigger(userProfile).then(res => {
      if (res.error) {
        toast(
          'error',
          'Atenção!',
          'Não foi possível encontrar os repositórios deste usuário',
        );
      }

      if (res.data) {
        setRepos(res.data);
      }
    });
  };

  useEffect(() => {
    if (data) {
      setRepos(data);
    }
  }, [data]);

  return {userProfile, setUserProfile, getRepos, repos};
}

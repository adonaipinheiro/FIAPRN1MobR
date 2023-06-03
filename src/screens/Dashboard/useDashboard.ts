import {useState} from 'react';
import {Keyboard} from 'react-native';

import {useToast} from '@hooks';
import {useServices} from '@services';
import {ListUserReposType} from 'src/services/useServices';

export function useDashboard() {
  const {listUserRepos} = useServices();
  const [userProfile, setUserProfile] = useState<string>('');
  const [repos, setRepos] = useState<ListUserReposType>([]);
  const {toast} = useToast();

  const getRepos = () => {
    Keyboard.dismiss();
    if (userProfile === '') {
      toast('info', 'Atenção!', 'Usuário não informado');
      return;
    }
    listUserRepos(userProfile)
      .then(resp => {
        setRepos(resp);
      })
      .catch(_ => {
        toast(
          'error',
          'Atenção!',
          'Não foi possível encontrar os repositórios deste usuário',
        );
      });
  };

  return {userProfile, setUserProfile, getRepos, repos};
}

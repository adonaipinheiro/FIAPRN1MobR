import auth from '@react-native-firebase/auth';
import crashlytics from '@react-native-firebase/crashlytics';

import {instanceGithub} from './instance';

export type UserReposType = {
  name: string;
  full_name: string;
  language: string;
  stargazers_count: number;
  owner: {
    avatar_url: string;
  };
  html_url: string;
};

export type ListUserReposType = [UserReposType] | [];

const SHOULD_LOG = false;

function logError(err: any) {
  if (SHOULD_LOG) {
    console.log(err);
  }
}

export function useServices() {
  async function listUserRepos(user: string) {
    try {
      const repos = (await instanceGithub.get(`users/${user}/repos`))
        .data as ListUserReposType;
      return repos;
    } catch (err) {
      logError(err);
      throw Error;
    }
  }

  async function createUserWithEmailAndPass(
    name: string,
    email: string,
    pass: string,
  ) {
    return await auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(resp => {
        resp.user.updateProfile({
          displayName: name,
        });
      })
      .catch(err => {
        crashlytics().recordError(err);
        logError(err);
        throw Error;
      });
  }

  async function signInUserWithEmail(email: string, pass: string) {
    return await auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(err => {
        crashlytics().recordError(err);
        logError(err);
        throw Error;
      });
  }

  async function signOut() {
    await auth().signOut();
  }

  function getUserName() {
    try {
      const user = auth().currentUser?.displayName;
      return user ? user : 'usuário';
    } catch (err) {
      logError(err);
      return 'usuário';
    }
  }

  return {
    createUserWithEmailAndPass,
    signOut,
    getUserName,
    signInUserWithEmail,
    listUserRepos,
  };
}

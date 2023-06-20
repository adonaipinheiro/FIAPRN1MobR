import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {ListUserReposType} from 'src/services/useServices';

export const githubApi = createApi({
  reducerPath: 'githubApi',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.github.com'}),
  endpoints: builder => ({
    listUserRepos: builder.query<ListUserReposType, string>({
      query: user => `users/${user}/repos`,
    }),
  }),
});

export const {useListUserReposQuery, useLazyListUserReposQuery} = githubApi;

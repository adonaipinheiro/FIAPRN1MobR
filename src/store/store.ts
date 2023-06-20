import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/dist/query';

import authSlice from './auth/authSlice';
import {githubApi} from './services/githubApi';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [githubApi.reducerPath]: githubApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(githubApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

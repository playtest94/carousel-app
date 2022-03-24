import {configureStore} from '@reduxjs/toolkit';
import authReducer from './auth';
import playerReducer from './player';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    player: playerReducer,
  },
});

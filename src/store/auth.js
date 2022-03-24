import {createSlice} from '@reduxjs/toolkit';
import api from '../api/toolbox';

const initialState = {current: null};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrent(state, action) {
      api.setHeader(
        'Authorization',
        `${action.payload.type} ${action.payload.token}`,
      );
      state.current = action.payload;
    },
    reset(state) {
      api.deleteHeader('Authorization');
      state.current = null;
    },
  },
});
export const {setCurrent, reset} = authSlice.actions;
export default authSlice.reducer;

import {createSlice} from '@reduxjs/toolkit';

const initialState = {videoUrl: null, shownPlayer: false};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    showPlayer(state, action) {
      state.videoUrl = action.payload.videoUrl;
      state.shownPlayer = true;
    },
    hidePlayer(state, action) {
      state.videoUrl = null;
      state.shownPlayer = false;
    },
    reset(state) {
      state = initialState;
    },
  },
});
export const {showPlayer, hidePlayer, reset} = playerSlice.actions;
export default playerSlice.reducer;

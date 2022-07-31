import { createStore } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import gameSliceReducer from './game';
import modalSliceReducer from './modal';

const store = configureStore({
  reducer: {
    game: gameSliceReducer,
    modal: modalSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

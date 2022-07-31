import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
  isModalShown?: boolean;
  resultMsg: string;
}

const initialModalState: ModalState = {
  isModalShown: false,
  resultMsg: '',
};

//* modal slice
const modalSlice = createSlice({
  name: 'modal',
  initialState: initialModalState,
  reducers: {
    showModal(state, action: PayloadAction<ModalState>) {
      const resultMsg = action.payload.resultMsg;
      state.resultMsg = resultMsg;
      state.isModalShown = true;
    },
    removeModal(state) {
      state.resultMsg = '';
      state.isModalShown = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

//* modal slice
const initialModalState = { isModalShown: false, resultMsg: "" };

const modalSlice = createSlice({
  name: "modal",
  initialState: initialModalState,
  reducers: {
    showModal(state, action) {
      const resultMsg = action.payload.resultMsg;
      state.resultMsg = resultMsg;
      state.isModalShown = true;
    },
    removeModal(state) {
      state.resultMsg = "";
      state.isModalShown = false;
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice.reducer;

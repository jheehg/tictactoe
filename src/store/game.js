import { createSlice } from "@reduxjs/toolkit";

//* board slice
const initialGameState = { 
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ],
  player: 0, 
  turn: 0,
  start: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: initialGameState,
  reducers: {
    mark(state, action) {
      const { position, mark, turn } = action.payload;
      //console.log(action.payload);
      state.board[position[0]][position[1]] = mark;
      state.turn = turn;
    },
    // 게임 시작 또는 끝에 호출
    setStart(state, action) {
      const start = action.payload;
      state.start = start;
    },
    // 게임 시작 호출
    setPlayer(state, action) {
      const player = action.payload.player;
      state.player = player;
      state.turn = player;
      state.start = true;
    },
    // 게임 종료 호출
    reset(state) { 
      state.board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ];
      state.player = 0;
      state.turn =  0;
      state.start = false;
    },
  }
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;
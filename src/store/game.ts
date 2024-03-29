import { createSlice } from '@reduxjs/toolkit';

export interface GameState {
  board: number[][];
  player: number;
  turn: number;
  start: boolean;
  result: string[];
}

const initialGameState: GameState = {
  board: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  player: 0,
  turn: 0,
  start: false,
  result: [],
};

//* board slice
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
    savePosition(state, action) {
      const { result } = action.payload;
      state.result = result;
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
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ];
      state.player = 0;
      state.turn = 0;
      state.start = false;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice.reducer;

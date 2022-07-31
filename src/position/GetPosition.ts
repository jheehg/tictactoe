import { RootState } from '../store/index';

export const isAvailable = (
  position: number[],
  state: RootState['game']['board']
) => {
  let [row, col] = position;
  if (state[row][col]) return false;
  else return true;
};

export const getRandomPosition = (state: RootState['game']['board']) => {
  let ridx = -1,
    cidx = -1;
  let count = 0;
  state.forEach((row) => {
    if (!row.includes(0)) count++;
  });
  while (count < 3) {
    ridx = getRandomIndex(3);
    cidx = getRandomIndex(3);
    if (isAvailable([ridx, cidx], state)) break;
  }
  return [ridx, cidx];
};

const getCount = (state: RootState['game']['board'], player: number) => {
  let count = 0;
  let H1 = [0, 0, 0],
    H2 = [0, 0, 0],
    H3 = [0, 0, 0];
  let D1 = [0, 0, 0],
    D2 = [0, 0, 0];
  let V1 = [0, 0, 0],
    V2 = [0, 0, 0],
    V3 = [0, 0, 0];
  let winner = 0; // X: 1, O: 2
  let opponent = player === 1 ? 2 : 1;

  for (let i = 0; i < state.length; i++) {
    count = 0;
    for (let j = 0; j < state[i].length; j++) {
      if (state[i][j] === player) {
        count++;
        if (count === 3) {
          winner = player;
        }
        let CASE1 = [false, 0],
          CASE2 = [false, 0],
          CASE3 = [false, 0],
          CASE4 = [false, 0],
          CASE5 = [false, 0],
          CASE6 = [false, 0];

        if (state[i][0] === player) CASE1 = [true, player];
        else if (state[i][0] === opponent) CASE1 = [true, opponent];

        if (state[i][1] === player) CASE2 = [true, player];
        else if (state[i][1] === opponent) CASE2 = [true, opponent];

        if (state[i][2] === player) CASE3 = [true, player];
        else if (state[i][2] === opponent) CASE3 = [true, opponent];

        if (state[0][j] === player) CASE4 = [true, player];
        else if (state[0][j] === opponent) CASE4 = [true, opponent];

        if (state[1][j] === player) CASE5 = [true, player];
        else if (state[1][j] === opponent) CASE5 = [true, opponent];

        if (state[2][j] === player) CASE6 = [true, player];
        else if (state[2][j] === opponent) CASE6 = [true, opponent];

        if (CASE1[0]) {
          V1[i] = CASE1[1] as number;
          if (i === 0) D1[0] = CASE1[1] as number;
          else if (i === 2) D2[0] = CASE1[1] as number;
        }
        if (CASE2[0]) {
          V2[i] = CASE2[1] as number;
          if (i === 1) {
            D1[1] = CASE2[1] as number;
            D2[1] = CASE2[1] as number;
          }
        }
        if (CASE3[0]) {
          V3[i] = CASE3[1] as number;
          if (i === 0) D2[2] = CASE3[1] as number;
          else if (i === 2) D1[2] = CASE3[1] as number;
        }

        if (CASE4[0]) H1[j] = CASE4[1] as number;
        if (CASE5[0]) H2[j] = CASE5[1] as number;
        if (CASE6[0]) H3[j] = CASE6[1] as number;
      }
    }
  }

  return { H1, H2, H3, D1, D2, V1, V2, V3, winner };
};

export const getResult = (
  state: RootState['game']['board'],
  player: number
) => {
  const result = getCount(state, player);
  let opponent = player === 1 ? 2 : 1;
  if (
    result.winner > 0 ||
    (!result.D1.includes(0) && !result.D1.includes(opponent)) ||
    (!result.D2.includes(0) && !result.D2.includes(opponent)) ||
    (!result.V1.includes(0) && !result.V1.includes(opponent)) ||
    (!result.V2.includes(0) && !result.V2.includes(opponent)) ||
    (!result.V3.includes(0) && !result.V3.includes(opponent))
  ) {
    return player;
  }

  let full = 0;
  state.forEach((row) => {
    if (!row.includes(0)) full++;
  });

  return full < 3 ? 0 : full;
};

const getRandomIndex = (max: number) => {
  return Math.floor(Math.random() * max);
};

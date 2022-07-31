export const isAvailable = (position, state) => {
  let [row, col] = position;
  if (state[row][col] !== "") return false;
  else return true;
};

export const getRandomPosition = (state) => {
  let ridx = -1,
    cidx = -1;
  let count = 0;
  state.forEach((row) => {
    if (!row.includes("")) count++;
  });
  while (count < 3) {
    ridx = getRandomIndex(3);
    cidx = getRandomIndex(3);
    if (isAvailable([ridx, cidx], state)) break;
  }
  return [ridx, cidx];
};

export const addPriority = (state, player) => {
  const result = getCount(state, player);
  let newPriority = [];

  for (let line in result) {
    if (typeof result[line] !== "number") {
      let count = 0;
      // console.log(result[line], line, player);
      result[line].forEach((mark) => {
        if (mark === player) count++;
      });
      if (count === 2) {
        newPriority.push(line);
        console.log("[" + player + "]newPriority: " + newPriority);
      }
    }
  }

  return newPriority;
};

export const getPositionInPriority = (state, priority) => {
  let row = -1,
    col = -1;
  let line = "";

  if (priority.attack.length > 0) {
    line = priority.attack[0];
  } else if (priority.defend.length > 0) {
    line = priority.defend[0];
  }
  console.log(priority);
  const lineNumber = line.match(/[0-9]/).toString();
  if (line.includes("H")) {
    row = lineNumber - 1;
    col = state[lineNumber - 1].indexOf(0);
  } else if (line.includes("V")) {
    col = lineNumber - 1;
    if (state[0][col] === 0) row = 0;
    else if (state[1][col] === 0) row = 1;
    else if (state[2][col] === 0) row = 2;
  } else if (line.includes("D")) {
    if (lineNumber === 1) {
      if (state[0][0] === 0) {
        row = 0;
        col = 0;
      } else if (state[1][1] === 0) {
        row = 1;
        col = 1;
      } else if (state[2][2] === 0) {
        row = 2;
        col = 2;
      }
    } else if (lineNumber === 2) {
      if (state[0][2] === 0) {
        row = 0;
        col = 2;
      } else if (state[1][1] === 0) {
        row = 1;
        col = 1;
      } else if (state[2][0] === 0) {
        row = 2;
        col = 0;
      }
    }
  }

  return [row, col];
};

const getCount = (state, player) => {
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
        let CASE1 = [false, ""],
          CASE2 = [false, ""],
          CASE3 = [false, ""],
          CASE4 = [false, ""],
          CASE5 = [false, ""],
          CASE6 = [false, ""];

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
          V1[i] = CASE1[1];
          if (i === 0) D1[0] = CASE1[1];
          else if (i === 2) D2[0] = CASE1[1];
        }
        if (CASE2[0]) {
          V2[i] = CASE2[1];
          if (i === 1) {
            D1[1] = CASE2[1];
            D2[1] = CASE2[1];
          }
        }
        if (CASE3[0]) {
          V3[i] = CASE3[1];
          if (i === 0) D2[2] = CASE3[1];
          else if (i === 2) D1[2] = CASE3[1];
        }

        if (CASE4[0]) H1[j] = CASE4[1];
        if (CASE5[0]) H2[j] = CASE5[1];
        if (CASE6[0]) H3[j] = CASE6[1];
      }
    }
  }

  return { H1, H2, H3, D1, D2, V1, V2, V3, winner };
};

export const getResult = (state, player) => {
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
    if (!row.includes("")) full++;
  });

  return full < 3 ? 0 : full;
};

const getRandomIndex = (max) => {
  return Math.floor(Math.random() * max);
};

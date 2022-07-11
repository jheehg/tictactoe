import { useDispatch, useSelector } from "react-redux";
import { GameBoardContainer } from "./GameBoardStyles";
import { gameActions } from "../../store/game";
import { isAvailable } from "../../position/GetPosition";
import { useEffect } from "react";

const GameTable = (props) => {
  const { board, player, turn } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(board);
  }, [board, dispatch]);

  const setPlayerEmoji = (mark, position) => {
    const marks = board[position[0]][position[1]];
    if (!marks || marks.length === 0) {
      return;
    } else {
      if (mark === 1) return "❌";
      else if (mark === 2) return "⭕️";
      else return "";
    }
  };

  const markHandler = (position) => {
    if (player === 0) {
      alert("X 또는 O를 먼저 선택해주세요😄");
      return;
    }
    if (turn !== player) return false;
    markSpace(position);
  };

  const markSpace = (position) => {
    if (!isAvailable(position, board)) return;
    const opponent = player === 1 ? 2 : 1;
    dispatch(
      gameActions.mark({
        position,
        mark: player,
        turn: opponent,
      })
    );
  };

  return (
    <GameBoardContainer>
      <table>
        <tbody>
          {board.map((row, ridx) => (
            <tr key={ridx}>
              {row.map((col, cidx) => (
                <td key={cidx} onClick={markHandler.bind(null, [ridx, cidx])}>
                  {setPlayerEmoji(col, [ridx, cidx])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </GameBoardContainer>
  );
};

export default GameTable;

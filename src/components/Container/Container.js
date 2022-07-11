import GameBoard from "./GameBoard";
import { useEffect } from "react";
import { modalActions } from "../../store/modal";
import { gameActions } from "../../store/game";
import { getRandomPosition, getResult } from "../../position/GetPosition";
import Modal from "../UI/Modal";
import { useDispatch, useSelector } from "react-redux";

const Container = () => {
  const dispatch = useDispatch();
  const { start, turn, player } = useSelector((state) => state.game);
  const board = useSelector((state) => state.game.board);
  const { isModalShown } = useSelector((state) => state.modal);

  useEffect(() => {
    if (start) {
      let opponent = player === 1 ? 2 : 1;
      let result = 0;

      if (turn !== player) {
        result = getResult(board, player);
      } else {
        result = getResult(board, opponent);
      }

      let timer;
      if (result > 0) {
        timer = setTimeout(() => showModal(result), 700);
      } else {
        timer = setTimeout(() => markOtherSpace(), 700);
      }

      return () => {
        clearTimeout(timer);
      };
    }
  }, [board]);

  const markOtherSpace = () => {
    const opponent = player === 1 ? 2 : 1;
    if (turn !== player) {
      let col = -1,
        row = -1;

      [col, row] = getRandomPosition(board);

      if (col > -1 && row > -1 && start) {
        dispatch(
          gameActions.mark({
            position: [col, row],
            mark: opponent,
            turn: player,
          })
        );
      }
    }
  };

  const showModal = (player) => {
    let resultMsg = "";
    if (player === 3) {
      resultMsg = "draw! 🙃";
    } else {
      player = player === 1 ? "❌" : "⭕️";
      resultMsg = player + " player won!";
    }
    dispatch(modalActions.showModal({ resultMsg }));
    dispatch(gameActions.setStart({ start: false }));
  };

  return (
    <>
      {isModalShown && <Modal />}
      <GameBoard />
    </>
  );
};

export default Container;

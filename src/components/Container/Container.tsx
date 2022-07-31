import React from 'react';
import GameBoard from './GameBoard';
import { useEffect } from 'react';
import { modalActions } from '../../store/modal';
import { gameActions } from '../../store/game';
import { getRandomPosition, getResult } from '../../position/GetPosition';
import Modal from '../UI/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';

const Container: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { start, turn, player } = useSelector((state: RootState) => state.game);
  const board = useSelector((state: RootState) => state.game.board);
  const { isModalShown } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    if (start) {
      let opponent = player === 1 ? 2 : 1;
      let result = 0;

      if (turn !== player) {
        result = getResult(board, player);
      } else {
        result = getResult(board, opponent);
      }

      let timer: NodeJS.Timeout;
      if (typeof result === 'number') {
        if (result > 0) {
          timer = setTimeout(() => showModal(result), 700);
        } else {
          timer = setTimeout(() => markOtherSpace(), 700);
        }
      }
      // else {
      //   if (turn !== player) {
      //     getPositionSave(result);
      //   }
      // }

      return () => {
        clearTimeout(timer);
      };
    }
  }, [board]);

  // const getPositionSave = (result: any) => {
  //   let resultData: number[] = [];
  //   let isOneLeft = Number(player) * 2;
  //   for (let line in result) {
  //     if (isOneLeft === line.reduce((prev, curr) => prev + curr, 0)) {
  //       //resultData.push({line);
  //     }
  //   }
  //   dispatch(gameActions.savePosition({ result: resultData }));
  // };

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

  const showModal = (player: number) => {
    let resultMsg = '';
    if (player === 3) {
      resultMsg = 'draw! 🙃';
    } else {
      let playerMark = player === 1 ? '❌' : '⭕️';
      resultMsg = playerMark + ' player won!';
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

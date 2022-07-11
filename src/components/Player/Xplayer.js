import { useDispatch, useSelector } from "react-redux";
import { PlayerSelect } from "./PlayerStyles";
import { gameActions } from "../../store/game";

const Xplayer = (props) => {
  const player = useSelector((state) => state.game.player);
  const dispatch = useDispatch();

  const playerHandler = () => {
    if (player !== 0) return;
    dispatch(gameActions.setPlayer({ player: 1 }));
  };

  return (
    <>
      {player === 1 && (
        <PlayerSelect selected onClick={playerHandler}>
          🙅‍♂️ PLAYER
        </PlayerSelect>
      )}
      {player === 0 && (
        <PlayerSelect onClick={playerHandler}>🙅‍♂️ PLAYER</PlayerSelect>
      )}
    </>
  );
};

export default Xplayer;

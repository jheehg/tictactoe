import Oplayer from "./Oplayer";
import Xplayer from "./Xplayer";
import { PlayerContainer } from "./PlayerStyles";

const Players = (props) => {
  return (
    <PlayerContainer>
      <Xplayer />
      <Oplayer />
    </PlayerContainer>
  );
};

export default Players;

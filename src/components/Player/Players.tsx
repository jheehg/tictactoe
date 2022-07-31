import React from 'react';
import Oplayer from './Oplayer';
import Xplayer from './Xplayer';
import { PlayerContainer } from './PlayerStyles';

const Players: React.FC = (): JSX.Element => {
  return (
    <PlayerContainer>
      <Xplayer />
      <Oplayer />
    </PlayerContainer>
  );
};

export default Players;

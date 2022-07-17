import React from 'react';
import { Base } from './layouts/Base';
import { Game } from './features/game/components/Game';
import { useAppSelector } from './app/hooks';
import { GAME_STATUS } from './consts';
import { EndGame } from './features/game/components/EndGame';
import { GameStatus } from './types';
import { StartGame } from './features/game/components/StartGame';

const chooseGameView = (status: GameStatus): React.ReactNode => {
  if (status === GAME_STATUS.start) return <StartGame />

  if (status === GAME_STATUS.process) return <Game />

  if (status === GAME_STATUS.end) return <EndGame />

  return null;
};

export const App: React.FC = () => {
  const { status } = useAppSelector(state => state.game);

  return (
      <Base>
        { chooseGameView(status) }
      </Base>
  );
};

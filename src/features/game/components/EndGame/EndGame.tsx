import React, { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { GAME_STATUS, PLAYER_STATUS } from '../../../../consts';
import { updateGameStatus } from '../../gameSlice';
import { Menu } from '../../../../layouts/Menu';
import { Button } from '../../../../components/Button';

export const EndGame = () => {
  const { playerStatus } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  const clickHandler = useCallback(() => {
    dispatch(updateGameStatus(GAME_STATUS.start));
  }, [dispatch]);

  return (
    <Menu>
      <h2>{
        playerStatus === PLAYER_STATUS.success
          ? 'You win!'
          : 'You loose!'
      }</h2>
      <Button onClick={clickHandler}>Try again?</Button>
    </Menu>
  );
};

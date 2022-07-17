import React, { useCallback } from 'react';
import { Menu } from '../../../../layouts/Menu';
import { Button } from '../../../../components/Button';
import { useAppDispatch } from '../../../../app/hooks';
import { updateAreaSize, updateGameStatus} from '../../gameSlice';
import { AREA_SIZE, GAME_STATUS } from '../../../../consts';

export const StartGame = () => {
  const dispatch = useAppDispatch();

  const normalClickHandler = useCallback(() => {
    dispatch(updateGameStatus(GAME_STATUS.process));
  }, [dispatch]);

  const hardClickHandler = useCallback(() => {
    dispatch(updateAreaSize(AREA_SIZE.big));
    dispatch(updateGameStatus(GAME_STATUS.process));
  }, [dispatch]);

  return (
    <Menu>
      <h2>Choose difficulty!</h2>
      <Button onClick={normalClickHandler}>Normal</Button>
      <Button onClick={hardClickHandler}>Hard</Button>
    </Menu>
  );
};

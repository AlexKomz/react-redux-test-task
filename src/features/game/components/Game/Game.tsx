import React, {useEffect} from 'react';
import { Steps } from './components/Steps';
import { Area } from './components/Area';
import { useAppDispatch, useAppSelector } from '../../../../app/hooks';
import { initializeGame } from '../../gameSlice';

export const Game: React.FC = () => {
  const { steps, blocks, areaSize } = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initializeGame())
  }, [dispatch]);

  return (
    <>
      <Steps directions={steps} />
      <Area blocks={blocks} size={areaSize} />
    </>
  );
};

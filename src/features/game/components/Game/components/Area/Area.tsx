import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Block } from '../Block';
import { AreaSize, IBlock, PlayerStatus } from '../../../../../../types';
import { GAME_STATUS, PLAYER_STATUS, SIZE } from '../../../../../../consts';
import { useAppDispatch } from '../../../../../../app/hooks';
import { updatePlayerStatus, updateGameStatus } from '../../../../gameSlice';

type AreaProps = {
  size: AreaSize;
  blocks: IBlock[];
};

type AreaWrapperProps = {
  size: number;
};

const AreaWrapper = styled.div<AreaWrapperProps>`
  display: grid;
  grid-template: repeat(${({ size }) => size }, auto) / repeat(${({ size }) => size }, auto);
  gap: 4px;
`;

export const Area: React.FC<AreaProps> = ({ size, blocks }) => {
  const dispatch = useAppDispatch();

  const blockClickHandler = useCallback((block: IBlock) => {
    const result: PlayerStatus = block.isTargetBlock ? PLAYER_STATUS.success : PLAYER_STATUS.fail;
    dispatch(updatePlayerStatus(result));

    setTimeout(() => dispatch(updateGameStatus(GAME_STATUS.end)), 1000);
  }, [dispatch]);

  return (
    <AreaWrapper size={SIZE[size]}>
      { blocks.map(block => <Block key={block.id} block={block} onClick={blockClickHandler} />) }
    </AreaWrapper>
  );
};

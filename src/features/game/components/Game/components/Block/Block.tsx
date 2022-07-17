import React, { useState } from 'react';
import styled from 'styled-components';
import { Flag } from '../../../../../../components/Flag';
import { IBlock } from '../../../../../../types';
import { Target } from '../../../../../../components/Target';
import { useAppSelector } from '../../../../../../app/hooks';
import { PLAYER_STATUS } from '../../../../../../consts';

type BlockProps = {
  block: IBlock;
  onClick: (block: IBlock) => void;
};

type BlockWrapperProps = {
  isOpen: boolean;
};

const BlockWrapper = styled.div<BlockWrapperProps>`
  width: 50px;
  height: 50px;
  border-radius: 10%;
  cursor: pointer;

  background: linear-gradient(to bottom right,
    ${
      ({ isOpen }) => isOpen
        ? 'greenyellow, green'
        : 'gold, darkgoldenrod'
    }
  );

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0.6;

  :hover { opacity: 0.8 }
  :active { opacity: 0.4 }
`;

export const Block: React.FC<BlockProps> = ({ block, onClick }) => {
  const { playerStatus } = useAppSelector(state => state.game);

  const { isStartedBlock, isTargetBlock } = block;

  const [isOpen, setIsOpen] = useState(false);

  const openBlock = () => {
    if (playerStatus !== PLAYER_STATUS.none) return;

    setIsOpen(true);
    onClick(block);
  };

  return (
    <BlockWrapper isOpen={isOpen} onClick={openBlock}>
      { !isOpen && isStartedBlock && <Flag /> }
      { isOpen && isTargetBlock && <Target /> }
    </BlockWrapper>
  );
};

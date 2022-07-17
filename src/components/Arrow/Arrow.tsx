import React from 'react';
import styled from 'styled-components';
import { Direction } from '../../types';
import { DIRECTION } from '../../consts';

type ArrowProps = {
  direction: Direction;
};

type BlockWrapperProps = {
  angle: number;
};

export const ANGLE = {
  [DIRECTION.top]: 90,
  [DIRECTION.right]: 180,
  [DIRECTION.bottom]: 270,
  [DIRECTION.left]: 0,
} as const;

const ArrowToken = styled.div<BlockWrapperProps>`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 22px;
  height: 22px;

  ::after,
  ::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    left: 3px;
  }

  ::after {
    width: 8px;
    height: 8px;
    border-bottom: 2px solid whitesmoke;
    border-left: 2px solid whitesmoke;
    transform: rotate(45deg);
    bottom: 7px;
  }

  ::before {
    width: 16px;
    height: 2px;
    bottom: 10px;
    background: whitesmoke;
  }

  transform: rotate(${ ({ angle }) => angle }deg);
`;

export const Arrow: React.FC<ArrowProps> = ({ direction }) => (
  <ArrowToken angle={ANGLE[direction]} />
);

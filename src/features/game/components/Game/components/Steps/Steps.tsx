import React from 'react';
import styled from 'styled-components';
import { Arrow } from '../../../../../../components/Arrow';
import { Direction } from '../../../../../../types';

type StepsProps = {
  directions: Direction[];
};

const StepsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;

  padding: 12px 0;

  display: flex;
  justify-content: center;
  gap: 12px;

  background: linear-gradient(to bottom, #101010, #585858);
  opacity: 0.8;
`;

export const Steps: React.FC<StepsProps> = ({ directions }) => {
  if (!directions.length) return null;

  return (
    <StepsWrapper>
      { directions.map((direction, i) => <Arrow key={i} direction={direction} />) }
    </StepsWrapper>
  );
};

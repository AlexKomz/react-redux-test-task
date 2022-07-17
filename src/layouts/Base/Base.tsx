import React from 'react';
import styled from 'styled-components'

type BaseProps = {
  children: React.ReactNode;
};

const CentredWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <CentredWrapper>
      { children }
    </CentredWrapper>
  );
};

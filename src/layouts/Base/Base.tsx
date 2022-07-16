import React from 'react';
import styled from 'styled-components'

type BaseProps = {
  children: React.ReactNode;
};

const CentredWrapper = styled.div`
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

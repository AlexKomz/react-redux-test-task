import React from 'react';
import styled from 'styled-components';

type MenuProps = {
  children: React.ReactNode;
};

const MenuWrapper = styled.div`
  width: 200px;
  background: linear-gradient(to bottom right, gold, darkgoldenrod);
  border-radius: 20px;
  padding: 20px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  color: whitesmoke;
`;

export const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <MenuWrapper>
      { children }
    </MenuWrapper>
  );
};

import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
  onClick?: () => void;
  children?: string;
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  background: linear-gradient(to bottom right, greenyellow, green);
  color: whitesmoke;
  cursor: pointer;

  opacity: 0.8;

  :hover { opacity: 1; }
  :active { opacity: 0.6; }
`;

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const clickHandler = () => onClick?.();
  return <StyledButton onClick={clickHandler}>{ children }</StyledButton>;
};

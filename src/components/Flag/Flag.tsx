import React from 'react';
import styled from 'styled-components';

const FlagToken = styled.div`
  box-sizing: border-box;
  position: relative;
  display: block;
  width: 14px;
  height: 20px;
  border-left: 2px solid;

  ::after,
  ::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-bottom: 2px solid;
  }

  ::before {
    width: 12px;
    height: 10px;
    border-top: 2px solid;
    border-right: 2px solid transparent;
  }

  ::after {
    width: 8px;
    height: 8px;
    border-left: 2px solid;
    border-top-left-radius: 2px;
    border-bottom-right-radius: 2px;
    transform: rotate(45deg);
    top: 1px;
    left: 6px;
  }
`;

export const Flag: React.FC = () => <FlagToken />;

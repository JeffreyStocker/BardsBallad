import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
  margins: auto;

  background-color: ${props => props.theme.green};
  border-radius: 3px;
  outline: none;
  border: none;
  color: ${props => props.theme.text};
  padding: 15px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  &:active {
    box-shadow: none;
  }
`;

export default function ({children = null, ...props}) {
  return  <Button {...props} >{children}</Button>;
}
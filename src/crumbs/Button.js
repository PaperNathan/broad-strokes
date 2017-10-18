import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  color: white;

  height: 50px;
  width: 200px;

  font-size: 16px;
  margin: 0 0 10px 20px;
  border: 0px;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, .2);

  border-radius: 3px;
  transition: all .4s;

  ${(props) => props.success ? `
     background: #5F5;
   ` : ''};

   ${(props) => props.info ? `
     background: #55F;
   ` : ''};

   ${(props) => props.warning ? `
     background: #CC5;
   ` : ''};

   ${(props) => props.danger ? `
     background: #F55;
   ` : ''};

  ${(props) => props.disabled ? `
     background: #888;
     pointer-events: none;
   ` : ''};

  :hover {
    box-shadow: 0px 0px;
    cursor: pointer;
    transition: all .85s;
}`;

export { Button };

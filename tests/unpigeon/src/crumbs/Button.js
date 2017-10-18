import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  height: 54px;
  width: 300px;
  color: #ee5f56;
  background-color: rgba(0, 0, 0, 0);
  margin: 0px 20px 0px 20px;

  font-size: 20px;
  letter-spacing: 2px;
  font-weight: 500;

  border-radius: 50px;
  border: 3px solid #ee5f56;

  display: flex;
  justify-content: center;

  transition: all 1s;

  .heart {
    margin-top: 4px;
    margin-right: 16px;
    height: 16px;
    width: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  :hover {
    border-color: #fff;
    color: #fff;
    cursor: pointer;
    transition: all 1s;
}`;

export { Button };

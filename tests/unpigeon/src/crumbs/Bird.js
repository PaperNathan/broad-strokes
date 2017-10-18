import React, { Component } from 'react';
import styled from 'styled-components';

import bird from "./../images/pidgeon.svg";

const Bird = styled.div`{
  height: 44px;
  width: 185px;
  color: #fff;
  margin-bottom: 48px;

  background-image: url(${bird});
  background-repeat: no-repeat;
  background-position: center;
}`

export { Bird };

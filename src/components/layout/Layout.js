import React, { Component } from 'react';
import styled from 'styled-components';

import { Button } from '../../crumbs/Button';

import logo from './../../logo.svg';

class Layout extends Component {
  render() {
    return (
      <div id = "container">
          <h1>Hello World</h1>
          <Button className="rainbow">Hello</Button>
          <Button success>Hello</Button>
          <Button info>Hello</Button>
          <Button warning>Hello</Button>
          <Button danger>Hello</Button>
          <Button disabled>Hello</Button>
      </div>
    );
  }
}

export default Layout;

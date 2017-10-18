import React, { Component } from 'react';
import styled from 'styled-components';

import { Copyright } from './Copyright';

const date = new Date();

class Footer extends Component {
  render() {
    return (
        <Copyright>©{date.getFullYear()} Nathan Wade</Copyright>
    )
  }
}

export default Footer;

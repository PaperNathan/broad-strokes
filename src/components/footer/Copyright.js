import React, { Component } from 'react';
import styled from 'styled-components';

const date = new Date();

class Copyright extends Component {

  render() {
    return (
        <div className="copyright">
            <p className="copyright-text">
                ©{date.getFullYear()} Company Name - All Rights Reserved
            </p>
        </div>
    )
  }
}

export default Copyright;

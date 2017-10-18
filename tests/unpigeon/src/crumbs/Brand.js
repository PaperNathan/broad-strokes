import React, { Component } from 'react';
import styled from 'styled-components';

import logo from "./../images/un.svg";

const Brand = styled.div`{
    height: 50px;
    width: 185px;
    color: #fff;
    margin: 16px 0;

    background-image: url(${logo});
    background-repeat: no-repeat;
    background-position: center;

    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: rgba(255, 255, 255, 0);

    display: flex;
    justify-content: center;
    align-items: center;
    
    transition: border-color 1s;

    img {
        height: auto;
        width: 200px;
    }

    :hover {
        border-color: rgba(255, 255, 255, 1);
        cursor: pointer;
        transition: border-color 1s;
    }
}`

export { Brand };

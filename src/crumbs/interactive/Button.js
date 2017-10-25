import React, { Component } from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;

    @media only screen and (min-device-width: 767px) {
        flex-direction: row;
        margin: 0px;
    }
}`

const Button = styled.a`
    height: 40px;
    width: 200px;
    margin: 10px 10px;

    border: 1px solid white;
    perspective: 1000px;

    background-color: rgba(0,0,0,0);
    background-size: 200px auto;

    transition: all .3s;

    > p {
        height: 100%;
        width: 100%;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all .3s;
    }

    :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 1);
        transition: all .3s;
        > p {
            color: orange;
        }
    }

    ${(props) => props.flip ? `
        :hover > p {
            transform: rotateX(180deg);
            transition: .3s;
        }
    ` : ''};

    ${(props) => props.shiftcolor ? `
        :hover {
            background-color: rgba(255, 0, 0, 1);
        }
    ` : ''};

    @media only screen and (min-device-width: 767px) {
        margin: 30px 10px;
    }
}`;

export { Button, ButtonContainer };

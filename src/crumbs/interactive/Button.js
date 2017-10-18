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

const Flip = styled.div`{
    height: 100%;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: .3s;

    p {
        color: white;
    }
}`

const Button = styled.button`
    height: 40px;
    width: 200px;
    margin: 10px 10px;

    border: 1px solid white;
    perspective: 1000px;

    background-color: rgba(0,0,0,0);
    background-size: 200px auto;

    transition: all .3s;

    :hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, 1);
        transition: all .3s;

        > div {
            transform: rotateX(180deg);
            transition: .3s;
            > p {
                color: orange;
            }
        }
    }

    @media only screen and (min-device-width: 767px) {
        margin: 30px 10px;
    }
}`;

export { Button, ButtonContainer, Flip };

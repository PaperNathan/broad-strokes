import React, { Component } from 'react';
import styled from 'styled-components';

const NormalText = styled.p`{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
}`

const BrushText = styled.div`{
    font-family: 'Permanent Marker', cursive;
    font-size: 60px;
    text-align: center;
    
    color: white;
    margin: 20px 0 20px;
}`

const Title = styled.div`{
    width: 100%;
    color: white;

    font-family: 'Montserrat', sans-serif;
    letter-spacing: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
}`


export { NormalText, BrushText, Title };

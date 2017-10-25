import React, { Component } from 'react';
import styled from 'styled-components';

// import components
import Nav from './../nav/Nav';
import Footer from './../footer/Footer';

//import crumbs (independently styled elements)
import { Container } from './Container';
import { NormalText, BrushText, Title } from './../../crumbs/formatting/Text';
import { Button, ButtonContainer } from "./../../crumbs/interactive/Button";

import logo from './../../logo.svg';

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav />
          <BrushText>BROAD STROKES</BrushText>
          <Title>REACT-BASED UI KIT</Title>

          <ButtonContainer>

            <Button flip href="https://github.com/PaperNathan/broad-strokes/blob/master/README.md">
                <NormalText>DOCS</NormalText>
            </Button>

            <Button flip href="https://github.com/PaperNathan/broad-strokes">
                <NormalText>GITHUB</NormalText>
            </Button>

            <Button shiftcolor href="#">
                <NormalText>STYLED TEST</NormalText>
            </Button>

          </ButtonContainer>

        <Footer />
      </Container>
    );
  }
}

export default Layout;

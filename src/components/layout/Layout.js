import React, { Component } from 'react';
import styled from 'styled-components';

// import components
import Nav from './../nav/Nav';
import Footer from './../footer/Footer';

//import crumbs (independently styled elements)
import { Container } from './Container';
import { NormalText, BrushText, Title } from './../../crumbs/formatting/Text';
import { Button, ButtonContainer, Flip } from "./../../crumbs/interactive/Button";

import logo from './../../logo.svg';

class Layout extends Component {
  render() {
    return (
      <Container>
        <Nav />
          <BrushText>BROAD STROKES</BrushText>
          <Title>REACT-BASED UI KIT</Title>

          <ButtonContainer>

            <Button>
              <Flip>
                <NormalText>DOCS</NormalText>
              </Flip>
            </Button>

            <Button>
              <Flip>
                <NormalText>GITHUB</NormalText>
              </Flip>
            </Button>

            <Button>
              <Flip>
                <NormalText>OTHER</NormalText>
              </Flip>
            </Button>

          </ButtonContainer>

        <Footer />
      </Container>
    );
  }
}

export default Layout;

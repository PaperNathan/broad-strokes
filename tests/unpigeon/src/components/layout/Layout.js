import React, { Component } from 'react';
import styled from 'styled-components';

// import Components
import Nav from "../nav/Nav";

// import Crumbs
import { Container } from '../../crumbs/Container';
import { Button } from '../../crumbs/Button';
import { Bird } from '../../crumbs/Bird';
import { BigText } from '../../crumbs/BigText';
import { SubText } from '../../crumbs/SubText';


class Layout extends Component {
  render() {
    return (

        <Container>
            <Nav />
            <Bird />
            <BigText>Discover your new ambition.</BigText>
            <SubText><span className="throb">Rate how you feel</span> about the following 10 words.</SubText>
            <Button><span className="heart">❤️</span><p> Take the visual quiz</p></Button>
        </Container>

    );
  }
}

export default Layout;

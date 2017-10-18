import React, { Component } from 'react';
import styled from 'styled-components';

import FooterInformation from './FooterInformation';
import FooterContactForm from './FooterContactForm';
import Copyright from './Copyright';

// Styled Components

const FooterMain = styled.div`
    background-color: #231F20;
  
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const FooterContainer = styled.div`
    width: 80%;
    max-width: 614px;
    padding-top: 20px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    @media (min-width: 767px) {
      justify-content: space-between;
      flex-direction: row;
    }
`;

// Props

const socialMedia = {
    facebook: {
      href: "#",
      name: "test",
    },
    twitter: {
      href: "#",
      name: "test",
    },
    instagram: {
      href: "#",
      name: "test",
    },
};


class Footer extends Component {
  render() {
    return (
        <FooterMain>
          <FooterContainer>

            <FooterInformation social={socialMedia} />
            <FooterContactForm />

          </FooterContainer>
          <Copyright />

        </FooterMain>
    )
  }
}

export default Footer;

import React from "react";
import styled, { css } from 'styled-components';

// import Crumbs
import { NavContainer } from './../../crumbs/NavContainer';
import { Brand } from './../../crumbs/Brand';

class Nav extends React.Component {

    render() {
        return (
            <NavContainer>
                <Brand></Brand>
            </NavContainer>
        )
    }
}

export default Nav;

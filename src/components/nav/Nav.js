import React from "react";
import styled, { css } from 'styled-components';

import NavItems from "./NavItems";

const links = [
    {
        title: "Home",
        href: "/",
        icon: "#"
    },

    {
        title: "Link1",
        href: "test",
        icon: "#"
    },

    {
        title: "Link2",
        href: "#",
        icon: "#"
    },

    {
        title: "Link3",
        href: "#",
        icon: "#"
    },

];

class Nav extends React.Component {

    render() {
        return (
            <div>
                <div id = "nav-spacer"></div>
                
                <div id = "nav">

                    <div id = "left-menu"></div>
                    <div id = "logo"></div>

                    <div id = "nav-button-container">
                        <div className = "nav-buttons hamburger"></div>
                        {links.map(key => <NavItems key={key.title} links={key} />)}
                    </div>
                
                </div>
            </div>
        )
    }
}

export default Nav;

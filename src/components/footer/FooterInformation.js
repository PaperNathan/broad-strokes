import React, { Component } from 'react';
import styled from 'styled-components';

class FooterInformation extends Component {
  render() {
    return (
        <div className="general-contact-info">
        
            <p className="title">
                CLIENT NAME
            </p>

            <p className="subtitle">
                CLIENT SUBTITLE
            </p>

            <div className = "footer-body-text">
                <a href={this.props.social.facebook.href}>
                    <div className = "icon facebook">&#xf082;<p>&nbsp;&nbsp;@{this.props.social.facebook.name}</p></div>
                </a>

                <a href={this.props.social.twitter.href}>
                    <div className = "icon instagram">&#xf16d;<p>&nbsp;&nbsp;@{this.props.social.twitter.name}</p></div>
                </a>

                <a href={this.props.social.instagram.href}>
                    <div className = "icon youtube">&#xf16a;<p>&nbsp;&nbsp;{this.props.social.instagram.name}</p></div>
                </a>
            </div>

        </div>
    );
  }
}

export default FooterInformation;

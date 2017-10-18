import React, { Component } from 'react';
import styled from 'styled-components';

// Import Crumbs
import { Button } from '../../crumbs/Button';
import { Input } from '../../crumbs/Input';
import { TextArea } from '../../crumbs/TextArea';

class FooterContactForm extends Component {
  render() {
    return (
        <div className = "contact-form">
            <p className="title bottom-spacer">CONTACT</p>

            <Input type="text" id="firstName" name="firstname" placeholder="姓名" />
            <Input type="text" id="email" name="email" placeholder = "信箱" />
            <Input type="text" id="phoneNumber" name="phoneNumber" placeholder = "電話號碼" />
            <TextArea id="message" name="message" placeholder="內容" />
            <Button className="submit-button rainbow">
                Submit
            </Button>
        </div>
    )
  }
}

export default FooterContactForm;

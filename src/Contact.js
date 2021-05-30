import React, { Component } from "react";
import './Contact.css';
import MailButton from "./MailButton";
import {Button, ButtonGroup} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <h1 className="contact_header">Want to talk?</h1>
                <h5 className='ctc'>Whether you've got a question or just want to say hi, my inbox is always open.
                    Feel free to reach out!</h5>

                {/*<div className="buttons">*/}
                {/*    <div className="darkone"><Button variant="outline-light" href="mailto:mckerracher@gmail.com">Email</Button>{' '}</div>*/}
                {/*    /!*<div className="darkone"><MailButton label="Email" mailto="mailto:mckerracher@gmail.com" /></div>*!/*/}
                {/*    <div className="lightone"><Button variant="outline-light" href="https://www.linkedin.com/in/joshua-mckerracher/">LinkedIn</Button>{' '}</div>*/}
                {/*</div>*/}


                <div>
                <ButtonGroup className="buttons justify-content-center">
                    <Button variant="outline-light" href="mailto:mckerracher@gmail.com">Email</Button>{' '}
                    <Button variant="outline-light" href="https://www.linkedin.com/in/joshua-mckerracher/">LinkedIn
                    </Button>{' '}
                </ButtonGroup>
                </div>
            </div>
        );
    }
}
export default Contact;
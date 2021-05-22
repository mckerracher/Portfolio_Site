import React, { Component } from "react";
import './Contact.css';
import {Button} from "react-bootstrap";

class Contact extends Component {
    render() {
        return (
            <div className='Contact'>
                <h1 className="contact_header">Want to talk?</h1>
                <h5 className='ctc'>Whether you've got a question or just want to say hi, my inbox is always open.
                    Feel free to reach out!</h5>

                <div className="buttons">
                    <div className="darkone"><Button variant="outline-light" mailto="mckerracher@gmail.com">Email</Button>{' '}</div>
                    <div className="lightone"><Button variant="outline-light">LinkedIn</Button>{' '}</div>
                </div>
            </div>
        );
    }
}
export default Contact;
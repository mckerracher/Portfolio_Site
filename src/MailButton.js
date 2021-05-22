import React from "react";
import { Link } from "react-router-dom";
import {Button} from "react-bootstrap";

const MailButton = ({ mailto, label }) => {
    return (
        <Button variant="outline-light">
        <Link
            to='mailto:mckerracher@gmail.com'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
        </Button>
    );
};

export default MailButton;
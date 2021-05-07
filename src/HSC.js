import React, { Component } from "react";
import './HSC.css';

class HSC extends Component {
    render() {
        return (
            <div className='Projects'>
                <span className="prj">Projects</span>
                <iframe className="repl"
                        src="https://replit.com/@JoshuaMcKerrach/HashMap-Spell-Checker?lite=true"/>
                <div className="line"></div>

            </div>
        );
    }
}
export default HSC;
import React, {Component} from "react";
import './HSC.css';

class HSC extends Component {
    render() {
        return (
            <div className='Projects'>
                <h1>HashMap Spell Checker</h1>
                <div className="d-flex flex-row justify-content-center">
                <ul>
                    <li>To run the spell checker, enter the following command in the command line interface below:
                        <ul>
                            <li>./sc</li>
                        </ul>
                    </li>
                    <li>To see the source code:
                        <ul>
                            <li>Best option: <a href="https://github.com/mckerracher/HashMap-Spell-Checker">Github</a></li>
                            <li>At the bottom of the window click on the "code" icon, and then select the "Files" icon
                                in the top right corner (main.c contains the majority of the code).</li>
                        </ul>
                    </li>

                </ul>
                </div>
                    <iframe className="HSC_repl" src="https://replit.com/@JoshuaMcKerrach/HashMap-Spell-Checker?embed=true"/>
            </div>
        );
    }
}

export default HSC;
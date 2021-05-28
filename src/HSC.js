import React, {Component} from "react";
import './HSC.css';

class HSC extends Component {
    render() {
        return (
            <div className='Projects'>
                <h1>HashMap Spell Checker</h1>
                <div className="list">
                <ul>
                    <li>To run the spell checker, click on the "shell" tab below and execute the following command:
                        <ul>
                            <li>./sc</li>
                        </ul>
                    </li>
                    <li>To see the source code:
                        <ul>
                            <li>Best option: <a href="https://github.com/mckerracher/HashMap-Spell-Checker">Github</a></li>
                            <li>On the left hand side of the window, click on the top left icon for "files".</li>
                        </ul>
                    </li>

                </ul>
                </div>
                    <iframe className="HSC_repl" src="https://replit.com/@JoshuaMcKerrach/HashMap-Spell-Checker?lite=true"/>
            </div>
        );
    }
}

export default HSC;
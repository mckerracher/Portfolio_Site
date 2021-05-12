import React, { Component } from "react";
import "./Opal.css"


class Opal extends Component {
    render() {
        return (
            <div>
                <span>OPaL</span>
                <iframe className="repl"
                        src="https://replit.com/@JoshuaMcKerrach/HashMap-Spell-Checker?lite=true"/>
            </div>
        );
    }
}
export default Opal;
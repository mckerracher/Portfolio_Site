import React, { Component } from "react";
import "./Bl.css"

class Bl extends Component {
    render() {
        return (
            <div className='Projects'>
                <h1>The Backlog</h1>
                <iframe className="bl_repl" src="https://replit.com/@JoshuaMcKerrach/340Website?lite=true"/>
            </div>
        );
    }
}
export default Bl;
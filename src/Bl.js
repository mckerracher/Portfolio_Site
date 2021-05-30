import React, { Component } from "react";
import "./Bl.css"

class Bl extends Component {
    render() {
        return (
            <div className='Projects'>
                <h1>The Backlog</h1>
                <div className="d-flex flex-row justify-content-center">
                    <ul>
                    <li>
                        This is a website written in Python (using the Flask framework). The website can be viewed <a
                    href="https://thebacklog340.herokuapp.com/">here</a>. The Backlog was a group project for my databases
                    course at OSU, and the purpose of the site is to maintain a list (a backlog) of podcast episodes to
                    be completed on my teammate's podcast.
                    </li>
                        <li>
                            The code is best viewed on Github <a href="https://github.com/mckerracher/340_Website">here</a>.
                        </li>
                    </ul>
                </div>
                <iframe className="bl_repl" src="https://replit.com/@JoshuaMcKerrach/340Website?lite=1"/>
            </div>
        );
    }
}
export default Bl;
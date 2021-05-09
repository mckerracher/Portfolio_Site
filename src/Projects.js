import React, { Component } from "react";
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='Projects'>
                <span className="prj">Projects</span>
                <iframe className="repl"
    src="https://replit.com/@JoshuaMcKerrach/HashMap-Spell-Checker?lite=true"/>
                {/*<div className="line"></div>*/}

            </div>
        );
    }
}
export default Projects;
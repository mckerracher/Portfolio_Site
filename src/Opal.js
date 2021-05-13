import React, {Component} from "react";
import "./Opal.css"

class Opal extends Component {
    render() {
        return (
            <div className='Projects'>
                <iframe className="repl" src="https://replit.com/@JoshuaMcKerrach/OPaL?lite=true"/>
            </div>
        );
    }
}

export default Opal;
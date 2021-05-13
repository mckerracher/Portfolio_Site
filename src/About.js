import React, {Component} from "react";
import './About.css';

class About extends Component {
    render() {
        return (
            <div className='About'>
                <h1>About Me</h1>

                <div className="langs">

                    <div className="python">
                        <div className="inner-python">
                            <div className="left">Python</div>
                            <div className="right">90%</div>
                        </div>
                    </div>

                    <div className="java">
                        <div className="inner-java">
                            <div className="left">Java</div>
                            <div className="right">90%</div>
                        </div>
                    </div>

                    <div className="C">
                        <div className="inner-C">
                            <div className="left">C/C++</div>
                            <div className="right">75%</div>
                        </div>
                    </div>

                    <div className="javascript">
                        <div className="inner-javascript">
                            <div className="left">Javascript</div>
                            <div className="right">70%</div>
                        </div>
                    </div>

                    <div className="SQL">
                        <div className="inner-SQL">
                            <div className="left">SQL</div>
                            <div className="right">70%</div>
                        </div>
                    </div>

                    <div className="bash">
                        <div className="inner-bash">
                            <div className="left">Bash</div>
                            <div className="right">70%</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;

import React, {Component} from "react";
import './About.css';
import {ListGroup} from "react-bootstrap";


class About extends Component {
    render() {
        return (
            <div className='About'>
                <h1 className="about_header">About Me</h1>

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

                <div className="LHS">
                    Hello! My name is Josh, and I enjoy creating things with code. My interest in software started while
                    working on a second bachelor's degree in Electrical Engineering in 2019. Part of the Electrical
                    Engineering curriculum included two Computer Science courses. After the first course in CS, I was hooked!
                    I switched my major to Computer Science and completed a second bachelor's degree from
                    Oregon State University. I'm now a DevOps Software Engineer at Micron working with a wide
                    variety of technologies.

                    My current interests are learning new web technologies, big data ETL/ELT processes, machine learning,
                    and reinforcement learning (especially adversarial reinforcement learning).
                </div>

            </div>
        );
    }
}

export default About;

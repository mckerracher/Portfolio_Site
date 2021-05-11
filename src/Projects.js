import React, { Component } from "react";
import { Card, CardDeck } from 'react-bootstrap';
import './Projects.css';

class Projects extends Component {
    render() {
        return (
            <div className='Projects'>

                <div className="CardContainer">

                    <CardDeck className="pt-3">
                    <Card>
                        <Card.Body>
                            <Card.Title className="text-dark">OPaL - OSU Programming Language Compiler</Card.Title>
                            <Card.Text className="text-dark">
                                OPaL is a compiler implemented in C/C++ for a dynamically typed language,
                                that is inspired by Python and C. It produces assembly code modelled after
                                Java bytecode using a stack machine. An orchestrator tool that is used by the end user, runs the individual
                                components of the project sequentially and then invokes NASM to output an
                                executable.

                                The program also generates a number of helpful references, that show the
                                individual steps taken by the compiler. A HTML report can be generated with the
                                output shown from each stage, [example](), man pages showing individual source
                                file usage, source code doxygen report etc.

                                * The project follows the GNU coding standards found
                                [here](https://www.gnu.org/prep/standards/standards.html#Formatting)
                                * The code is commented for [Doxygen](https://www.doxygen.nl) and developer
                                documentation can be found [here](https://mckerracher.github.io/OPaL/)

                                - Team:
                                - [Kedar Damle](mailto: damlek@oregonstate.edu)
                                - [Josh Mckerracher](mailto: mckerraj@oregonstate.edu)
                                - [Sarah Leon](mailto: leons@oregonstate.edu)
                            </Card.Text>
                        </Card.Body>

                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title className="text-dark">Card title</Card.Title>
                            <Card.Text className="text-dark">
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </CardDeck>

                    <div></div>

                    <CardDeck className="pt-3">

                        <Card>
                            <Card.Body>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text className="text-dark">
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card>
                            <Card.Body>
                                <Card.Title className="text-dark">Card title</Card.Title>
                                <Card.Text className="text-dark">
                                    This card has supporting text below as a natural lead-in to additional
                                    content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>

                    </CardDeck>

                </div>
            </div>
        );
    }
}
export default Projects;
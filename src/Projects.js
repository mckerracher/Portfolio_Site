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
                                OPaL is my senior group project - a compiler implemented in C/C++ and NASM for a
                                dynamically typed language inspired by Python and C. It produces assembly code modelled after
                                Java bytecode using a stack machine. An orchestrator tool that is used by the end user
                                runs the individual components of the project sequentially and then invokes NASM to
                                output an executable.
                            </Card.Text>
                        </Card.Body>

                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title className="text-dark">The Backlog Website</Card.Title>
                            <Card.Text className="text-dark">
                                A website hosted on Heroku and created with the Python Flask framework that uses MySQL (ClearDB). This website
                                was created as a team project for my databases course (CS340) at OSU, and the database architecture can be found in the repo under
                                SQL/report.pdf.
                            </Card.Text>
                        </Card.Body>

                    </Card>

                </CardDeck>

                    <div></div>

                    <CardDeck className="pt-3">

                        <Card>
                            <Card.Body>
                                <Card.Title className="text-dark">Doubly Linked List</Card.Title>
                                <Card.Text className="text-dark">
                                    This implementation of a doubly linked list was created for my Boise State University
                                    CS221 class. The architecture for this implementation is defined in the
                                    IUDoubleLinkedList.java file, which includes all of the methods that must be
                                    included, along with their required arguments and the kind exception each must
                                    throw. The generic Java Type is used, which enforces data type uniformity across
                                    methods.
                                </Card.Text>
                            </Card.Body>

                        </Card>

                        <Card>
                            <a href="/HSC" className="card-link">
                            <Card.Body>
                                <Card.Title className="text-dark">Hashmap Spell Checker</Card.Title>
                                <Card.Text className="text-dark">
                                    This is a command line interface spell checking application implemented in C. The
                                    data structure employed to store and access the dictionary is a hashmap. To calculate
                                    how similar a word is to a given word in the dictionary, the Levenstein distance is
                                    computed for the user supplied word.
                                </Card.Text>
                            </Card.Body>
                            </a>

                        </Card>
                    </CardDeck>

                </div>
            </div>
        );
    }
}
export default Projects;
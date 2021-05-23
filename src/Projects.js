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
                        <a href="/Opal" className="card-link">
                        <Card.Body className="bg-primary">
                            <Card.Title className="text-light">OPaL - OSU Programming Language Compiler</Card.Title>
                            <Card.Text className="text-light">
                                OPaL is my senior group project - a compiler implemented in C for a
                                dynamically typed language called OPaL. It produces assembly code modeled after
                                Java byte-code using a single address stack machine model. An orchestrator tool that
                                is used by the end user runs the individual components of the project sequentially and then invokes NASM to
                                output an executable.
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>

                    <Card>
                        <a href="/Bl" className="card-link">
                        <Card.Body className="bg-primary">
                            <Card.Title className="text-light">The Backlog Website</Card.Title>
                            <Card.Text className="text-light">
                                The Backlog is a website hosted on Heroku and created with the Python Flask framework.
                                The Backlog uses a MySQL (ClearDB) database for data storage. This website was created
                                as a team project for my databases course (CS340) at OSU, and the database architecture
                                can be found in the Github repository under the SQL folder in the report.pdf file.
                                Completed Winter 2021.
                            </Card.Text>
                        </Card.Body>
                        </a>
                    </Card>

                </CardDeck>

                    <div></div>

                    <CardDeck className="pt-3">

                        <Card>
                            <a href="/Dll" className="card-link">
                            <Card.Body className="bg-primary">
                                <Card.Title className="text-light">Doubly Linked List</Card.Title>
                                <Card.Text className="text-light">
                                    This implementation of a doubly linked list was created for my Boise State University
                                    CS221 class. The architecture for this implementation is defined in the
                                    IUDoubleLinkedList.java file, which includes all of the methods that must be
                                    included, along with their required arguments and the kind exception each must
                                    throw. The generic Java Type is used, which enforces data type uniformity across
                                    methods.
                                </Card.Text>
                            </Card.Body>
                            </a>

                        </Card>

                        <Card>
                            <a href="/HSC" className="card-link">
                            <Card.Body className="bg-primary">
                                <Card.Title className="text-light">Hashmap Spell Checker</Card.Title>
                                <Card.Text className="text-light">
                                    The final project for the Data Structures course at OSU: a CLI spell checking
                                    application implemented in C.  The data structure used to store and access the
                                    dictionary is a hashmap.  To calculate how similar a word is to a given word in
                                    the dictionary, the Levenstein distance is computed for the user supplied word:
                                    if the words isn't found, it supplies the top 5 most similar words in the
                                    dictionary.
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
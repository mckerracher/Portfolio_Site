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
                            <Card.Title className="text-dark">OPaL</Card.Title>
                            <Card.Text className="text-dark">
                                OPaL - OSU Programming Language Compiler

                                Class: CS467-400 Spring 2021  Capstone Project

                                This is the repository for the team to design and develop a compiler using
                                C/C++ for a dynamically typed language, that is inspired by Python and C.
                                It produces assembly code modelled after Java bytecode using a stack machine.
                                An orchestrator tool that is used by the end user, runs the individual
                                components of the project sequentially and then invokes NASM to output an
                                executable.

                                * The language syntax specification for the language can be found in the
                                “OPaL - Language Specification” document.

                                * A few examples of programs written and compiled can be found in the
                                “OPaL -Examples” document.

                                The goal of the compiler is not to be the most efficient or create the most
                                optimized program, but rather be easy to understand, implement and study. The
                                process will help us learn compiler development and understand how a high level
                                language can be translated into lower level code to run on a computer.
                                The compiler is split into following stages:
                                1. MARC - The preprocessor replaces macros in the source file. The language
                                currently supports the #include directive, which reads in the given file.
                                2. ALEX - The lexical analyzer reads the source file resulting from MARC and
                                creates lexemes for the supported syntax to append to the symbol table.
                                3. ASTRO - The syntax analyzer walks symbol table created by ALEX and creates a
                                abstract syntax tree based on the lanuage grammar.
                                4. GENIE - The code generator walks the syntax tree created by ASTRO and
                                produces [single-address]() assembly code for a 32-bit stack machine.
                                5. oc - The orchestrator tool used by the end user calls the individual
                                components in order to generate an assembly file for the given source file.
                                It then calls NASM to create an object file, followed by linking the object
                                file with `ld` to generate an executable.

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
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
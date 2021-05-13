import React, {Component} from "react";
import {Route, Switch, NavLink} from "react-router-dom";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Home from './Home';
import HSC from './HSC';
import Bl from './Bl';
import Opal from './Opal';
import Dll from './Dll';
import "./App.css";
import {Navbar, NavItem, NavDropdown, Nav} from 'react-bootstrap';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div class="navbar">
                    <Navbar className="justify-content-end border-bottom" style={{width: "110%"}} sticky="top"
                            expand="lg">
                        <Navbar.Brand id="name" href="/">Joshua McKerracher</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">

                                <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                                    <NavDropdown.Item href="/Projects">Projects Home</NavDropdown.Item>
                                    <NavDropdown.Item href="/HSC">Hashmap Spell Checker</NavDropdown.Item>
                                    <NavDropdown.Item href="/Dll">Doubly Linked List</NavDropdown.Item>
                                    <NavDropdown.Item href="/Opal">OPaL</NavDropdown.Item>
                                    <NavDropdown.Item href="/Bl">The Backlog Website</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href='/about'>About</Nav.Link>
                                <Nav.Link href="/Experience">Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="https://www.linkedin.com/in/joshua-mckerracher/">LinkedIn</Nav.Link>
                                <Nav.Link href="https://github.com/mckerracher">Github</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>


                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/About' component={About}/>
                    <Route exact path='/Experience' component={Experience}/>
                    <Route exact path='/Projects' component={Projects}/>
                    <Route exact path='/HSC' component={HSC}/>
                    <Route exact path='/Dll' component={Dll}/>
                    <Route exact path='/Bl' component={Bl}/>
                    <Route exact path='/Opal' component={Opal}/>
                </Switch>
            </div>
        );
    }
}

export default App;

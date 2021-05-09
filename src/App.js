import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home';
import HSC from './HSC';
import "./App.css";
import { Navbar, NavItem, NavDropdown, Nav } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div class="navbar">
          <Navbar collapseOnSelect expand="lg">
              <Navbar.Brand id="name" href="/">Joshua McKerracher</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">

                      <NavDropdown title="Projects" id="collapsible-nav-dropdown">
                          <NavDropdown.Item href="/Projects">Projects Home</NavDropdown.Item>
                          <NavDropdown.Item href="#">Hashmap Spell Checker</NavDropdown.Item>
                          <NavDropdown.Item href="#">Doubly Linked List</NavDropdown.Item>
                          <NavDropdown.Item href="#">OPaL</NavDropdown.Item>
                          <NavDropdown.Item href="#">The Backlog Website</NavDropdown.Item>
                          <NavDropdown.Item href="#">Magic Square</NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link href='/about'>About</Nav.Link>
                      <Nav.Link href="/Experience">Experience</Nav.Link>
                  </Nav>
                  <Nav>
                      <Nav.Link href="/Resume">Resume</Nav.Link>
                      <Nav.Link href="https://github.com/mckerracher">Github</Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
        </div>







        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/About' component={About} />
          <Route exact path='/Experience' component={Experience} />
          <Route exact path='/Resume' component={Resume} />
          <Route exact path='/Projects' component={Projects} />
            <Route exact path='/HSC' component={HSC} />
            {/*DLL*/}
            {/*340 site*/}
            {/*OPaL*/}
            {/*Magic Square*/}
        </Switch>
      </div>
    );
  }
}

export default App;

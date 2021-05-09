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
        {/*<nav className='App-nav'>*/}

        {/*    <NavLink activeClassName='active-link' to='/'>*/}
        {/*      Home*/}
        {/*    </NavLink>*/}

        {/*    <NavLink activeClassName='active-link' to='/experience'>*/}
        {/*      Experience*/}
        {/*    </NavLink>*/}

        {/*    <NavLink activeClassName='active-link' to='/resume'>*/}
        {/*      Resume*/}
        {/*    </NavLink>*/}

        {/*    <NavLink activeClassName='active-link' to='/projects'>*/}
        {/*      Projects*/}
        {/*    </NavLink>*/}

        {/*    <NavLink activeClassName='active-link' to='/about'>*/}
        {/*      About*/}
        {/*    </NavLink>*/}

        {/*</nav>*/}




          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/">Joshua McKerracher</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                      <Nav.Link href='/about'>About</Nav.Link>
                      <Nav.Link href="#pricing">Pricing</Nav.Link>
                      <NavDropdown title="Projects" id="collasible-nav-dropdown">
                          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Nav>
                      <Nav.Link href="#deets">More deets</Nav.Link>
                      <Nav.Link eventKey={2} href="#memes">
                          Dank memes
                      </Nav.Link>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>








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

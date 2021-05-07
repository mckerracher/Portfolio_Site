import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Resume from './Resume';
import Home from './Home';
import HSC from './HSC';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <nav className='App-nav'>

            <NavLink activeClassName='active-link' to='/'>
              Home
            </NavLink>

            <NavLink activeClassName='active-link' to='/experience'>
              Experience
            </NavLink>

            <NavLink activeClassName='active-link' to='/resume'>
              Resume
            </NavLink>

            <NavLink activeClassName='active-link' to='/projects'>
              Projects
            </NavLink>

            <NavLink activeClassName='active-link' to='/about'>
              About
            </NavLink>

        </nav>

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

import React, { Component, Fragment } from "react";
import logo from './logo.svg';
import './App.css';
import {  Route, Link } from 'react-router-dom';
import { NavItem } from "react-bootstrap";
import Signup from "./containers/Signup";





class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      isAuthenticated: false
    };
  }
  
  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  }

  handleLogout = event => {
    this.userHasAuthenticated(false);
  }

  render() {

    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };
    
   
    
    return (
      
      <div className="App">
        
        <header className="App-header">
        
    {this.state.isAuthenticated
        ? <NavItem onClick={this.handleLogout}>Logout</NavItem>
        : <Fragment>
              <NavItem componentClass='span'>
                <Link to="/signup">Signup</Link>
              </NavItem>
              <NavItem componentClass='span'>
                <Link to="/login">Login</Link>
              </NavItem>
          </Fragment>
    }

        
     <Route childProps={childProps} />
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Signup />
      </div>
    );
  }
}

export default App;

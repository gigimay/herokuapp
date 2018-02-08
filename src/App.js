import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import {BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';
const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match;
}

const Links = () => (
  <nav>
   <NavLink exact activeClassName="active" to="./Home">Home</NavLink>
   <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
   <NavLink
     isActive={isActiveFunc}
     activeClassName="active"
     to="/contact">Contact</NavLink>
  </nav>
)
const Damnyou = () => (
  <boule>
    <ul>
      <li><NavLink to="/">one</NavLink></li>
      <li><NavLink to="/about">two</NavLink></li>
      <li><NavLink replace to="/contact">three</NavLink></li>
    </ul>
  </boule>
)


const App = () => (
  <Router>
    <div>
      <Damnyou />
      <Links />
      <Home />
      <Route path="/about" render={() => <h1>about me</h1>} />
      <Route path="/contact"
      children={({match}) => match && <h1>contact me</h1>} />
      <Route path="/:page(\d{2}-\d{2}-\d{4})/:subpage(\.[a-z]+)" render={({match}) => (
        <h2>
          this is may's page: {match.params.page || 'Home'} <br/>
          this is may's subpage: {match.params.subpage}
       </h2>
      )}/>

    </div>

  </Router>
);

export default App;

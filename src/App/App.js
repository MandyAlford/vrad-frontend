import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import map from '../assets/map.png';
import LoginForm from '../LoginForm/LoginForm';
import Areas from '../Areas/Areas';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <main>
        <div className='login-screen'>
          <header className='login-header'>
              <img src= {map} />
              <h1>VRAD</h1>
          </header>
          <Route path='/' exact component={ LoginForm } />
        </div>
        <Route path='/areas' exact component={ Areas } />
      </main>
    )
  }
}

export default App;

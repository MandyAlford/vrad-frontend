import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';
import Areas from '../Areas/Areas';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <main>
        <Route path='/' exact component={ LoginForm } />
        <Route path='/areas' exact component={ Areas } />
      </main>
    )
  }
}

export default App;

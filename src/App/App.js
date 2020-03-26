import React, { Component } from 'react';
import './App.css';
import map from '../assets/map.png';
import LoginContainer from '../LoginContainer/LoginContainer';
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
          <LoginContainer />
          <Areas />
        </div>
      </main>
    )
  }
}

export default App;

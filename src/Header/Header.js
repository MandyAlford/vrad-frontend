import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import blackmap from '../assets/black-map.png';

class Header extends Component {
  constructor() {
    super();
  }

  logOff = (event) => {
    debugger
  }

  render() {
    return(
      <header className='areas-header'>
        <div className='logo-container'>
            <img src= { blackmap } />
            <h1>VRAD</h1>
        </div>
          <h2 className='header-description'>WELCOME, USER!</h2>
        <form className='Header-buttons'>
          <button id='favorite-button'>FAVORITES</button>
          <button id='log-off-button' onClick={ this.logOff }>LOGOFF</button>
        </form>
      </header>
    )
  }
}

export default withRouter(Header);

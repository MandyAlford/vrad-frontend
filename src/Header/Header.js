import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import blackmap from '../assets/black-map.png';
import './Header.css';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(

        <header className='areas-header'>
          <div className='logo-container'>
            <img src= {blackmap} />
            <h1 className="vrad">VRAD</h1>
          </div>
          <div className='header-text-container'>
            {this.props.headerInfo}
          </div>
          <form className='button-container'>
            <button className='header-buttons' id='favorite-button' onClick={this.props.displayFavorites}>FAVORITES</button>
            <button className='header-buttons' id='log-off-button' onClick={this.props.logoutUser}>LOG OFF</button>
          </form>
        </header>


    )
  }
}

export default withRouter(Header);

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.css';
import Areas from '../Areas/Areas';

class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form className='login-form'>
        <input type='text' id='name-input' placeholder='NAME'/>
        <input type='text' id='email-input' placeholder='EMAIL'/>
        <select>
          <option value="" disabled selected>TYPE OF TRAVEL </option>
          <option value='business'>BUSINESS</option>
          <option value='vacation'>VACATION</option>
          <option value='other'>OTHER</option>
        </select>
        <NavLink to='/areas' className='submit-nav'>
          <button id='submit-button' type='submit'>
            SUBMIT
          </button>
        </NavLink>
      </form>
    )
  }
}

export default LoginForm;

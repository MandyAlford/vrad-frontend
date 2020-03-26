import React, { Component } from 'react';
import './LoginForm.css';

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
        <button id='submit-button'>SUBMIT</button>
      </form>
    )
  }
}

export default LoginForm;

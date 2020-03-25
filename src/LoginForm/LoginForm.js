import React, { Component } from 'react';
import './LoginForm.css';

class LoginForm extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='login-form'>
        <input type='text' id='name-input' placeholder='NAME'/>
        <input type='text' id='email-input' placeholder='EMAIL'/>
        <input list='travel-types' name='travel-type'/>
        <datalist id='travel-types'>
          <option value='' disabled selected>=Type of Travel</option>
          <option value='Business'/>
          <option value='Vacation'/>
          <option value='Other'/>
        </datalist>
        <button id='submit-button'>SUBMIT</button>
      </div>
    )
  }
}

export default LoginForm;

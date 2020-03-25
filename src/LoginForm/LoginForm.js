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
        <input list='travel-types' name='travel-type'placeholder='TYPE OF TRAVEL'/>
        <datalist id='travel-types'>
          <option value='Business'/>
          <option value='Vacation'/>
          <option value='Other'/>
        </datalist>
        <button id='submit-button'>SUBMIT</button>
      </form>
    )
  }
}

export default LoginForm;

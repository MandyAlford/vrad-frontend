import React, { Component } from 'react';
import './LoginContainer.css';
// import background from '../assets/background.png';
import LoginForm from '../LoginForm/LoginForm'

class LoginContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <LoginForm />
    )
  }
}

export default LoginContainer;

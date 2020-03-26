import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.css';
import Areas from '../Areas/Areas';
import map from '../assets/map.png';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      type: ''
    }
  }

  handleChange = (event) => {
    let key = event.target.id || event.currentTarget.value;
    this.setState({ [key]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.type === '') {
      event.preventDefault();
      document.querySelector('.error').classList.remove('hidden');
    } else {
      this.props.history.push('/areas')
    }
  }

  render() {
    return (
      <div className='login-screen'>
        <header className='login-header'>
            <img src= {map} />
            <h1>VRAD</h1>
        </header>
        <form className='login-form' onSubmit={this.handleSubmit}>
          <p class="error hidden">Please complete all required fields!</p>
          <input type='text' id='name' placeholder='NAME' onChange={this.handleChange}/>
          <input type='text' id='email' placeholder='EMAIL'onChange={this.handleChange}/>
          <select id='type' onChange={this.handleChange}>
            <option value="" disabled selected>TYPE OF TRAVEL </option>
            <option value='business' id='type'>BUSINESS</option>
            <option value='vacation'>VACATION</option>
            <option value='other'>OTHER</option>
          </select>
            <button id='submit-button' type='submit' onClick={this.handleSubmit}>
              SUBMIT
            </button>
        </form>
      </div>
    )
  }
}

export default LoginForm;

import React, { Component } from 'react';
import './LoginForm.css';
import map from '../assets/map.png';

class LoginForm extends Component {
  constructor(props) {
    super();
  }

  handleChange = (event) => {
    let key = event.target.id || event.currentTarget.value;
    this.props.change(key, event);
  }

  render() {
    return (
      <div className='login-screen'>
        <header className='login-header'>
          <img src= {map} />
          <h1>VRAD</h1>
        </header>
        <form className='login-form' onSubmit={this.props.loginUser}>
          <p className="error hidden">Please complete all required fields!</p>
          <input type='text' id='name' placeholder='NAME' onChange={this.handleChange}/>
          <input type='text' id='email' placeholder='EMAIL'onChange={this.handleChange}/>
          <select id='type' onChange={this.handleChange}>
            <option value="" disabled selected>TYPE OF TRAVEL </option>
            <option value='business' id='type'>BUSINESS</option>
            <option value='vacation'>VACATION</option>
            <option value='other'>OTHER</option>
          </select>
          <button id='submit-button' type='submit'>
            SUBMIT
          </button>
        </form>
      </div>
    )
  }
}

export default LoginForm;

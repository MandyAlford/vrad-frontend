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
          <img className='logo' src={map} alt='VRAD map logo'/>
          <h1 className='VRAD-header-text'>VRAD</h1>
        </header>
        <form className='login-form' onSubmit={this.props.loginUser}>
          <div className='error-container'></div>
          <input type='text' id='name' placeholder='NAME' onChange={this.handleChange}/>
          <input type='text' id='email' placeholder='EMAIL'onChange={this.handleChange}/>
          <select id='type' onChange={this.handleChange} defaultValue='TYPE OF TRAVEL'>
            <option value='TYPE OF TRAVEL' disabled>TYPE OF TRAVEL </option>
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

import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import LoginForm from '../LoginForm/LoginForm';
import Areas from '../Areas/Areas';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      type: ''
    }
  }

  change = (key, event) => {
    this.setState({ [key]: event.target.value })
  }

  loginUser = (event) => {
    event.preventDefault();
    if (this.state.name === '' || this.state.email === '' || this.state.type === '') {
      document.querySelector('.error').classList.remove('hidden');
    } else {
      this.props.history.push('/areas')
    }
  }

  logoutUser = (event) => {
    event.preventDefault();
    this.props.history.replace('/')
  }

  render() {
    return (
      <main>
        <Route path='/' exact>
          <LoginForm
            change={this.change}
            loginUser={this.loginUser}
          />
        </Route>

        <Route path='/areas' exact>
          <Areas
            name={this.state.name}
            type={this.state.type}
            logoutUser={this.logoutUser}
          />
        </Route>
      </main>
    )
  }
}

export default withRouter(App);

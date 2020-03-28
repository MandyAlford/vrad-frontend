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

  submit = () => {
    if (this.state.name === '' || this.state.email === '' || this.state.type === '') {
      document.querySelector('.error').classList.remove('hidden');
    } else {
      this.props.history.push('/areas')
    }
  }

  render() {
    return (
      <main>
        <Route
        path='/' exact render={
          (props) => <LoginForm change={this.change} submit={this.submit}/>
        }/>

        <Route
        path='/areas' exact render={
          (props) => <Areas name={this.state.name} type={this.state.type}/>
        }/>
      </main>
    )
  }
}

export default withRouter(App);

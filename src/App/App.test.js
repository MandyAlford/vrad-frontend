import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, mount } from '@testing-library/react';
import '@testing-library/jest-dom';
import { withRouter } from 'react-router'
import { Link, Route, BrowserRouter as Router } from 'react-router-dom'


describe('App', () => {
  it('When the app loads we should see the login form', () => {
    const { getByText } = render(<Router> <App /> </Router>);
    const header = getByText('VRAD');
    const form = getByText('TYPE OF TRAVEL');
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

});

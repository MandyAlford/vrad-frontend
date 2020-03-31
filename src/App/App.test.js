import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, waitFor, fireEvent } from '@testing-library/react';
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

  it('We should be able to login when form is complete', () => {
    const { getByPlaceholderText, getByText, getByDisplayValue, getByLabelText, debug } = render(<Router> <App /> </Router>);

    fireEvent.change(getByPlaceholderText('NAME'), {target: {value: 'Beyonce'}});
    fireEvent.change(getByPlaceholderText('EMAIL'), {target: {value: 'Beyonce@gmail.com'}});
    fireEvent.select(getByDisplayValue('TYPE OF TRAVEL'), {target: {value: 'OTHER'}});
    fireEvent.click(getByText('SUBMIT'))
    // fireEvent.submit(getByLabelText('login'));
    debug();

    // expect(App.loginUser).toHaveBeenCalled();
  });

  it('We should not be able to login when form is incomplete', () => {
    let mockLogin = jest.fn();

    const { getByPlaceholderText, getByText } = render(<Router> <App loginUser={mockLogin}/> </Router>);

    fireEvent.click(getByText('SUBMIT'));
    let errorMessage = getByText('Please complete all required fields!')

    expect(errorMessage).toBeInTheDocument();
  });

});

import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import App from '../App/App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { withRouter } from 'react-router';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

describe('LoginForm', () => {
  it('Renders with a header and form', () => {
    const { getByText } = render(<LoginForm />);
    const header = getByText('VRAD');
    const form = getByText('TYPE OF TRAVEL');
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });

  it('We should be able to login when form is complete', () => {
    let mockLogin = jest.fn();
    let mockChange = jest.fn();

    const { getByPlaceholderText, getByText } = render(<Router> <LoginForm change={mockChange} loginUser={mockLogin}/> </Router>);

    fireEvent.change(getByPlaceholderText('NAME'), {target: {value: 'Beyonce'}});
    fireEvent.change(getByPlaceholderText('EMAIL'), {target: {value: 'Beyonce@gmail.com'}});
    fireEvent.change(getByText('TYPE OF TRAVEL'), {target: {value: 'OTHER'}});
    fireEvent.click(getByText('SUBMIT'));

    expect(mockLogin).toHaveBeenCalledTimes(1);
  });

  it('We should not be able to login when form is incomplete', () => {
    let mockLogin = jest.fn();

    const { getByPlaceholderText, getByText } = render(<Router> <App loginUser={mockLogin}/> </Router>);

    fireEvent.click(getByText('SUBMIT'));
    let errorMessage = getByText('Please complete all required fields!')

    expect(errorMessage).toBeInTheDocument();
  });


});

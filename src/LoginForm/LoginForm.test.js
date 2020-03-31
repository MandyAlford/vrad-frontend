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
    const { getByText } = render(<LoginForm change={jest.fn()} loginUser={jest.fn()} formData={{name: '', email: '', type: 'TYPE OF TRAVEL'}}/>);
    const header = getByText('VRAD');
    const form = getByText('TYPE OF TRAVEL');
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });


});

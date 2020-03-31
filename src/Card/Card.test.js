import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import App from '../App/App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { withRouter } from 'react-router';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';

describe('Card', () => {
  it('Renders with a header', () => {
    const { getByText, debug } = render(<Card key={ 12 }
    id={ 12 }
    shortName={ 'RiNo' }
    longName={ 'River North' }
    description={ 'A description of RiNo' }
    routeToListings={ jest.fn() }/>);
    const header = getByText('RiNo');
    expect(header).toBeInTheDocument();
  });

  it('Renders with a description', () => {
    const { getByText, debug } = render(<Card key={ 12 }
    id={ 12 }
    shortName={ 'RiNo' }
    longName={ 'River North' }
    description={ 'A description of RiNo' }
    routeToListings={ jest.fn() }/>);
    const description = getByText('A description of RiNo');
    expect(description).toBeInTheDocument();
  });

  it('Renders with a button to see listings', () => {
    const { getByText, debug } = render(<Card key={ 12 }
    id={ 12 }
    shortName={ 'RiNo' }
    longName={ 'River North' }
    description={ 'A description of RiNo' }
    routeToListings={ jest.fn() }/>);
    const button = getByText('SEE LISTINGS');
    expect(button).toBeInTheDocument();
  });

  it('See listings button invokes the routeToListings method on click', () => {
    const mockRoute = jest.fn();
    const { getByText, debug } = render(<Card key={ 12 }
    id={ 12 }
    shortName={ 'RiNo' }
    longName={ 'River North' }
    description={ 'A description of RiNo' }
    routeToListings={ mockRoute }/>);
    fireEvent.click(getByText('SEE LISTINGS'))
    expect(mockRoute).toHaveBeenCalled()
  });

});

import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './Favorites';
import { BrowserRouter, Router, Route } from 'react-router-dom';

import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

import { fetchListing } from '../util/ApiCalls';
jest.mock('../util/ApiCalls');

describe('Favorites', () => {
  it('when  Favorites loads, we should see our favorite listings', async () => {
    fetchListing.mockResolvedValueOnce([
      {
        name: 'Beyonce Knowles',
        address: '123 Fancy St, Denver, CO 80204',
        superhost: true,
        beds: 5,
        baths: 4,
        costPerNight: 350,
        features: ['heated pool', 'jacuzzi'],
        area: 'rino',
        id: '4'
      }
    ]);

    const { getByText } = render(
      <Router path='/' component={Favorites}>
        <Route path='/favorites'>
          <Favorites />
        </Route>
      </Router>
    );


    const idea = await waitFor(() => getByText('Beyonce Knowles'));

    expect(idea).toBeInTheDocument();
  });
});

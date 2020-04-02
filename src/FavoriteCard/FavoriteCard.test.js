import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FavoriteCard from './FavoriteCard'

describe('FavoriteCard', () => {
  it('Renders with a header', () => {
    const { getByText } = render(
      <FavoriteCard details={{
        name: 'Brand New RiNo Build',
        address: '2525 Arapahoe St, Denver, CO 80205',
        superhost: 'Yes',
        beds: 5,
        baths: 4,
        costPerNight: 150,
        features: ['jacuzzi', 'fireplace'],
        area: 'rino',
        id: 404
      }}
      updateFavorites={ jest.fn()} />
    )

    const header = getByText('BRAND NEW RINO BUILD');
    expect(header).toBeInTheDocument();
  });

  it('Renders with an address', () => {
    const { getByText } = render(
      <FavoriteCard details={{
        name: 'Brand New RiNo Build',
        address: '2525 Arapahoe St, Denver, CO 80205',
        superhost: 'Yes',
        beds: 5,
        baths: 4,
        costPerNight: 150,
        features: ['jacuzzi', 'fireplace'],
        area: 'rino',
        id: 404
      }}
      updateFavorites={ jest.fn()} />
    )

    const address = getByText('ADDRESS: 2525 Arapahoe St, Denver, CO 80205');
    expect(address).toBeInTheDocument();
  });

  it('Renders with a superhost status', () => {
    const { getByText } = render(
      <FavoriteCard details={{
        name: 'Brand New RiNo Build',
        address: '2525 Arapahoe St, Denver, CO 80205',
        superhost: 'Yes',
        beds: 5,
        baths: 4,
        costPerNight: 150,
        features: ['jacuzzi', 'fireplace'],
        area: 'rino',
        id: 404
      }}
      updateFavorites={ jest.fn()} />
    )

    const superhost = getByText('SUPERHOST: Yes');
    expect(superhost).toBeInTheDocument();
  });
})

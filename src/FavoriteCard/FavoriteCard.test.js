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

  it('Renders with a number of beds', () => {
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

    const beds = getByText('BEDS: 5');
    expect(beds).toBeInTheDocument();
  });

  it('Renders with a number of baths', () => {
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

    const baths = getByText('BATHS: 4');
    expect(baths).toBeInTheDocument();
  });

  it('Renders with a cost per night', () => {
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

    const costPerNight = getByText('COST: $150');
    expect(costPerNight).toBeInTheDocument();
  });

  it('Renders with a list of features', () => {
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

    const features = getByText('FEATURES: jacuzzi, fireplace');
    expect(features).toBeInTheDocument();
  });

  it('Renders with an area', () => {
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

    const area = getByText('RINO');
    expect(area).toBeInTheDocument();
  });
})

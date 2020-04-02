import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('FavoriteCard', () => {
  it('Renders with a header', () => {
    const { getByText } = render(<FavoriteCard details={
      name: {'Brand New RiNo Build'},
      address: {'2525 Arapahoe St, Denver, CO 80205'},
      superhost: {'Yes'},
      beds: {5},
      baths: {4},
      costPerNight: {150},
      features: {['jacuzzi', 'fireplace']},
      area: {'rino'},
      id: {404}
    }
      updateFavorites={ jest.fn()} />)
      const header = getByText('Brand New RiNo Build');
      expect(header).toBeInTheDocument();
  });
})

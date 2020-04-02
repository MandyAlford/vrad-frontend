import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Areas from './Areas'


describe('Areas', () => {
  it('Renders with a header', () => {
    const { getByText } = render(
      <Areas />
    )
  });
})

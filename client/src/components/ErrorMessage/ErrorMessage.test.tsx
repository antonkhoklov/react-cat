import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

test('Renders ErrorMessage Component', () => {
  render(<ErrorMessage text="Some error message!"/>);
  const linkElement = screen.getByText(/Some error message!/i);
  expect(linkElement).toBeInTheDocument();
});

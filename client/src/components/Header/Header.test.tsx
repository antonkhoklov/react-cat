import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

test('Renders Header Component', () => {
  const {container} = render(<MemoryRouter><Header /></MemoryRouter>);

  const logoElement: HTMLParagraphElement|null = container.querySelector('p');
  expect(logoElement?.innerHTML).toBe("Cat Facts")

});

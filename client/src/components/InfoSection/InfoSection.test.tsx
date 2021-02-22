import React from 'react';
import { render, screen } from '@testing-library/react';
import InfoSection from './InfoSection';
import cat_img from '../../assets/images/cat.jpg';

test('Renders InfoSection Component', () => {
  const {container} = render(<InfoSection/>);

  const titleElement = screen.getByText(/Know your Cat Facts/i);
  expect(titleElement).toBeInTheDocument();

  const subtitleElement = screen.getByText(/Your one place to get all cat facts/i);
  expect(subtitleElement).toBeInTheDocument();
  
  const imgElement = container.querySelector('img');
  expect(imgElement?.src).toMatch(cat_img)

});

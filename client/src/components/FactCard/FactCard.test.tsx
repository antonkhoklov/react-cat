import React from 'react';
import { render, screen } from '@testing-library/react';
import FactCard from './FactCard';
import img_src from '../../assets/images/test_cat.jpg'

test('Renders FactCard Component', () => {
  const {container} = render(<FactCard text="Cat Fact!" image={img_src}/>);

  // checking is text is present
  const linkElement = screen.getByText(/Cat Fact!/i);
  expect(linkElement).toBeInTheDocument();

  // checking image source
  const imgElement = container.querySelector('img');
  expect(imgElement?.src).toMatch(img_src)

});

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Flame Haze Society text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Flame Haze Society/i);
  expect(linkElement).toBeInTheDocument();
});

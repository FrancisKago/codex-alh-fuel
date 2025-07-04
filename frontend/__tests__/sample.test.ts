import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

test('renders heading', () => {
  render(<Home />);
  expect(screen.getByText('ALH Fuel Management')).toBeInTheDocument();
});

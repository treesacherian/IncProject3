import { render, screen } from '@testing-library/react';
import BasketDisplay from './BasketDisplay';



test('renders basket display', () => {
  render(<BasketDisplay />);
  const linkElement = screen.getByText(/Total Price/i);
  expect(linkElement).toBeInTheDocument();
});


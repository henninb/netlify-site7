import { render, screen } from '@testing-library/react';
import App from './App';

test('renders sites section', () => {
  render(<App />);
  const heading = screen.getByText(/Sites/i);
  expect(heading).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Student Information System', () => {
  render(<App />);
  const heading = screen.getByText(/Student Information System/i);
  expect(heading).toBeInTheDocument();
});

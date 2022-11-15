import { render, screen } from '@testing-library/react';
import App from './App';

test('renders At Nurseries link', () => {
  render(<App />);
  const linkElement = screen.getByText(/At Nurseries/i);
  expect(linkElement).toBeInTheDocument();
});

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders theme toggle app', () => {
  render(<App />);
  // Change to match your actual content
  const headingElement = screen.getByText(/React Project-6/i);
  expect(headingElement).toBeInTheDocument();
});
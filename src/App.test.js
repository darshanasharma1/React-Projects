import { render, screen } from '@testing-library/react';
import App from './App';

test('renders task manager app', () => {
  render(<App />);
  // Change this to match what your TaskManager actually displays
  const headingElement = screen.getByText(/task manager/i);
  expect(headingElement).toBeInTheDocument();
});
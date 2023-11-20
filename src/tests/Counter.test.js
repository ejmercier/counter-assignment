import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter.js';

beforeEach(() => {
  render(<Counter/>);
})

test('renders counter message', () => {
  const countermessage = screen.getByText('Counter');
  expect(countermessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText('0');
  expect(initialCount).toBeInTheDocument();
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText('+'));
  const incrementedCount = screen.getByText('1');
  expect(incrementedCount).toBeInTheDocument();
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText('-'));
  const decrementedCount = screen.getByText('-1');
  expect(decrementedCount).toBeInTheDocument();
});

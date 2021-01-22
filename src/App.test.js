import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initual color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button')
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveTextContent('Change to red')
});

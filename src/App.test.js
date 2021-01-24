import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button has correct initual color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});

test('button turns blue when clicked', () => {
  render(<App />) 
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' })
  expect(colorButton).toHaveTextContent('Change to red')
});

test('button starts out enabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})
  expect(colorButton).toBeEnabled()
})

test('checkbox is unchecked', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  expect(checkbox).not.toBeChecked()
})  

test('checkbox is unchecked, disable button and enable with the second click', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name: 'Change to blue'})

  fireEvent.click(checkbox)
  expect(colorButton).not.toBeEnabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})
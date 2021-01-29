import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelWichSpaces } from './App'

test('button has correct initual color', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
  expect(colorButton).toHaveStyle({ backgroundColor: 'MediumVioletRed' })
});

test('button turns MidnightBlue when clicked', () => {
  render(<App />) 
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'MidnightBlue' })
  expect(colorButton).toHaveTextContent('Change to Medium Violet Red')
});

test('button starts out enabled', () => {
  render(<App/>)
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})
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
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('button color is gray when disabled, MediumVioletRed when enabled', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name:'Change to Midnight Blue'})

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: MediumVioletRed')
})

test('button color change with click to MidnightBlue, when disable to gray', () => {
  render(<App/>)
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'})
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'})

  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle('background-color: MidnightBlue')

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle('background-color: gray')
})

describe('spaces before camel-case capital letters', () => {
  test('works for no inner capital letters', () => {
    expect(replaceCamelWichSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })

  test('works for one inner capital letter', () => {
    expect(replaceCamelWichSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWichSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})

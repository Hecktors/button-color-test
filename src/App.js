import './App.css';
import { useState } from 'react';

export function replaceCamelWichSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
 
}

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  let newColor = buttonColor === 'red' ? 'blue' : 'red'
  const [isDisabled, setIsDisabled] = useState(false)
  
  function handleClick(){
    setButtonColor(newColor)
  }

  function handleChange(e){
    const checked = e.target.checked
    setIsDisabled(e.target.checked)
    setButtonColor(checked ? 'gray' : newColor)
  }

  return (
    <div >
      <button onClick={handleClick} disabled={isDisabled} style={{backgroundColor: buttonColor}}>Change to {newColor}</button>
      <input onChange={handleChange} type="checkbox" id="disable-button-checkbox"/>
      <label htmlFor="disable-button-checkbox">Disable button</label>
    </div>
  );
}

export default App;

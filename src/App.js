import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newColor = buttonColor === 'red' ? 'blue' : 'red'
  const [isDisabled, setIsDisabled] = useState(false)
  
  function handleClick(){
    setButtonColor(newColor)
  }

  function handleChange(e){
    const checked = e.target.checked
    setIsDisabled(e.target.checked)
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

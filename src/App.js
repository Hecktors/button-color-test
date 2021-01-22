import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const newColor = buttonColor === 'red' ? 'blue' : 'red'
  
  function handleClick(){
    setButtonColor(newColor)
  }

  return (
    <div >
      <button onClick={handleClick} style={{backgroundColor: buttonColor}}>Change to {newColor}</button>
    </div>
  );
}

export default App;

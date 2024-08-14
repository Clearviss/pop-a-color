import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import { v4 as uuid } from 'uuid';


const genRanHex = size => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

function RandomColors() {
  let randomColors = [];
  let randomSize = Math.floor(Math.random() * 10000 + 5)
  for (let index = 0; index < randomSize; index++) {
    let object = { id: uuid(), color: ("#" + genRanHex(6)) }
    randomColors.push(object)
  }
  return randomColors
}

function Main({ randomColors, onButtonClick }) {
  return (
    <div>

      {randomColors.map((color) => (
        <button
          id={color.id}
          key={color.id}
          style={{ backgroundColor: color.color, margin: "6px", border: "0.5px solid black" }}
          onClick={() => onButtonClick(color)}
        ></button>
      ))}
    </div>
  );
}

function App() {
  const [randomColors, setRandomColors] = useState(RandomColors());
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1);
  };

  const changeBackgroundColor = (color) => {
    document.body.style.backgroundColor = document.getElementById("_checkbox-26").checked ? "#242424" : color.color;

    document.getElementById(color.id).disabled = true;
    document.getElementById(color.id).style.backgroundColor = "rgb(0,0,0,0)"
    document.getElementById(color.id).style.border = ""
    document.getElementById(color.id).className = "disabledB"
    handleClick1()
  }

  const restartColors = () => {
    setRandomColors(RandomColors());
  }

  return (
    <>
      <div id='disableColors'><div style={{ marginBottom: "2vh" }}>Disable <br /> Colors <br /></div><div class="checkbox-wrapper-26">
        <input type="checkbox" id="_checkbox-26" onChange={changeBackgroundColor} />
        <label for="_checkbox-26">
          <div class="tick_mark"></div>
        </label>
      </div></div>
      <div id='counter'>{counter}</div>
      <div className='App'>
        <Main randomColors={randomColors} onButtonClick={changeBackgroundColor} />
        <br />
      </div>
    </>
  )
}


export default App

import React, { useState } from "react";
import Component2 from "./Test2/Component2";
const App = () => {
  const [counter, setCounter] = useState(2)
  const [keypress, setKeyPress] = useState()
  const handleClickIncrement = () => {
    setCounter(counter + 1)
  }
  const handleClickDecrement = () => {
    setCounter(counter - 1)
  }

  const handleKeyPress=(e)=> {
    setKeyPress(e.key);
  }

  return (
    <>
    
    <div>
      Counter
      <div>
        <button onClick={handleClickIncrement}>+</button>
        <div>{counter}</div>
        <button onClick={handleClickDecrement}>-</button>
      </div>
        <p >Last key pressed: {keypress} </p>
        <input type="text" onKeyPress={(e) => handleKeyPress(e)} /> 
    </div>
<Component2 />
    </>

    
  )
}

export default App

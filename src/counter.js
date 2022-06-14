import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import reportWebVitals from './reportWebVitals';

function Counter() {
  const mystyle = {
    color:'red', fontSize:'20px'
  };

  const[count,setCount] = useState(0);

  function increment() {
    setCount(count+1)
    console.log(count)
  }

  return(
    <>
    {count}
    <button style={mystyle} onClick={increment}>Increment</button>
    </>
    );
}

export default Counter;



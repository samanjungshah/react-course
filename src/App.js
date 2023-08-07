
// import { Header } from './components/Header';
// import {Footer} from './components/Footer';
import './app.css';
import { useState } from 'react';

import React from 'react'


export const App = () => {
  var [count,setCount] = useState(0);
  const handleAdd = ()=>{
    setCount(count++)
  }
  const handleSub = ()=>{
    setCount(count--)

  }
  const handleReset = () =>{
    setCount(0)
  }

  return (
    <div className="App">
      <div className="box">
        <p>{count}</p>
        <button onClick={handleAdd} className='add'>Add</button>
        <button onClick={handleSub} className='sub'>Sub</button>
        <button onClick={handleReset} className='reset'>Reset</button>

      </div>
    </div>
  )
}

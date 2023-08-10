
// import { Header } from './components/Header';
// import {Footer} from './components/Footer';
import './app.css';
import { useState } from 'react';

import React from 'react'

export const App = () => {
  const [tasks,setTasks] = useState([
    {id:5271,name:'Record react lectures',completed:true},
    {id:7825,name:'Edit react lectures',completed:false},
    {id:8391,name:'Watch lectures',completed:false},

  ])
  const [show,setShow] = useState(true);
  function handleDelete(id){
    setTasks(tasks.filter(task => task.id !== id));
  }
  return (
    <div className="App">
      <h1>Task List</h1>
      <ul>
        <button className = 'trigger' onClick={() => setShow(!show)}>Toogle</button>
        { show && tasks.map(({id,name,completed})=>(
          <li key={id} className={completed ? "completed":"incomplete"}>
            <span>{id} - {name}</span>
          <button onClick = {() => handleDelete(id)}className='delete'>Delete</button>
          </li>
        )) }
      </ul>
    </div>
  )
}


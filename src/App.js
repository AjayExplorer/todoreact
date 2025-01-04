import './App.css';
import React from 'react';

import { useState } from 'react';
function App() {
  const [todos,settodos]= useState([])
  const [todo,settodo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(e)=>settodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>settodos([...todos,todo])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          todos.map((value)=>{

         return (<div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
}

export default App;
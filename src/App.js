import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo(''); 
    }
  };

  const toggleStatus = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, status: !item.status } : item
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕</h2>
      </div>
      <div className="input">
        <input
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {todos.map((value) => (
          <div key={value.id} className="todo">
            <div className="left">
              <input
                type="checkbox"
                checked={value.status}
                onChange={() => toggleStatus(value.id)}
              />
              <p style={{ textDecoration: value.status ? 'line-through' : 'none' }}>
                {value.text}
              </p>
            </div>
            <div className="right">
              <i onClick={() => removeTodo(value.id)} className="fas fa-times"></i>
            </div>
          </div>
        ))}
        <div className="completed">
          <h3>Completed Tasks:</h3>
          {todos
            .filter((value) => value.status)
            .map((value) => (
              <h4 key={value.id}>{value.text}</h4>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;

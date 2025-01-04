import './App.css';
import React, { useState, useEffect } from 'react';


function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  
  // Get current date and day
  const getCurrentDay = () => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString('en-US', options);
  };

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo, status: false }]);
      setTodo(''); // Clear the input field
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

  // Dynamic date and day for display
  const currentDay = getCurrentDay();

  // Animation class for starting animation
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger animation when the component mounts
    setIsAnimated(true);
  }, []);

  return (
    <div className={`app ${isAnimated ? 'animated' : ''}`}>
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>{currentDay}</h2>
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

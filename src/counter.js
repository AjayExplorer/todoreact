import React, { useState,useEffect } from 'react';

function Counter() {
    useEffect(()=>{
        console.log("Mounting....")
        return ()=>{
            console.log("unMounting....")
        }
    })
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Welcome to React New</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <p>Current Count: {count}</p>
    </div>
  );
}

export default Counter;

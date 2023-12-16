import React, { useState, useEffect } from 'react';

const Meter = () => {

      const [count, setCount] = useState(0);
    
      const increment = () => {
        setCount(count + 1);
      };    
    
      const decrement = () => {
        setCount(count - 1);

        
      };

      useEffect(() => {
        console.log(`Значение счетчика изменено на:${count}`);
      }, [count]);
    
      return (
        <div>
          <h1>Счетчик: {count}</h1>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      );
    };



export default Meter;
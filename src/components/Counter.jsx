import React, {useState,} from 'react';
import './Counter.css';

const Counter = ()=> {

    const[count, setCount] = useState(0);

    const increment = ()=> {
        setCount((prev) => prev + 1);
    };

    const decrement = ()=> {
        setCount((prev) => prev - 1);
    };

    return (
        <div className='counter'>
            <h2>Counter</h2>
            <div className="count-display">Count: {count}</div>
            <div className="buttons">
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )
};

export default Counter;
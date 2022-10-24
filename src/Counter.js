import './Counter.css';
import React from 'react';
const { useState } = React;

const shadow = {
  boxShadow: '0 0 10px 10px #eaeaea',
  padding: 20,
};

const Counter = () => {
  const [count, setCount] = useState(256);

  const handleClick = (type) => () => {
    setCount(type === 'increment' ? count + 1 : count - 1);
  };
  return (
    <div className="container" style={shadow}>
      <div
        className="chevron chevron-up"
        style={{
          visibility: count >= 260 && 'hidden',
        }}
        onClick={handleClick('increment')}
      />
      <div className="number">{count}</div>
      <div
        className="chevron chevron-down"
        style={{
          visibility: count <= 250 && 'hidden',
        }}
        onClick={handleClick('decrement')}></div>
    </div>
  );
};

export default Counter;

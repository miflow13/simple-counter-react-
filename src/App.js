// App.js
import React, { useState } from 'react';
import Counter from './Counter';
import Button from './Button';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  const onClick = () => {
    setCount(count + 1);

    // Check if count is a milestone (e.g., 25, 50, 75, 100)
    const milestones = [25, 50, 75, 100];
    if (milestones.includes(count + 1)) {
      setMsg(`You have clicked ${count + 1} times!`);
    }

    // Check if count is 100
    if (count + 1 === 100) {
      setMsg('You win! You have clicked 100 times!');
    }
  };

  const onReset = () => {
    setCount(0);
    setMsg('');
  };

  const onStartOver = () => {
    onReset();
  };

  return (
    <div className="App">
      <Counter count={count} />
      <div className="button-container">
        <Button onClick={onClick} label="Click Here!" />
        {count === 100 && (
          <Button onClick={onStartOver} label="Start Over" />
        )}
        <Button onClick={onReset} label="Reset" />
      </div>
      <Message msg={msg} />
    </div>
  );
}

export default App;
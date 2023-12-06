// App.js
import React, { useState } from 'react';
import Counter from './Counter';
import Button from './Button';
import Message from './Message';
import WelcomeMessage from './WelcomeMessage';
import './styles.css';

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState('');

  const onClick = () => {
    setCount(count + 1);

    const milestones = [25, 50, 75, 100];
    if (milestones.includes(count + 1)) {
      setMsg(`You have clicked ${count + 1} times!`);
    }

    if (count + 1 === 100) {
      setMsg('You win! You have clicked 100 times!');
    }
  };

  const onReset = () => {
    setCount(0);
    setMsg('');
  };

  return (
    <div>
      <WelcomeMessage/>
    <div id="container">
      
      <Counter count={count} />
      <div className="button-container">
        <Button onClick={onClick} label="Count" />
        {count === 100 && <Button onClick={onReset} label="Start Over" />}
        <Button onClick={onReset} label="Reset" />
      </div>
    </div>
    <Message msg={msg} />
    </div>
  );
}

export default App;

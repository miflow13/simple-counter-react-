import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Counter from './Counter';
import Button from './Button';
import Message from './Message';
import WelcomeMessage from './WelcomeMessage';
import Game2 from './Game2';  // Rename the imported component
import './styles.css';

const GamePage = ({ onReset }) => (
  <React.Fragment>
    <Counter count={0} />
    <div className="button-container">
      <Button onClick={onReset} label="Start Over" />
      <Link to="/">
        <Button label="Back to Home" />
      </Link>
    </div>
  </React.Fragment>
);

const App = () => {
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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <WelcomeMessage />
              <div id="container">
                <Counter count={count} />
                <div className="button-container">
                  {count < 100 && <Button onClick={onClick} label="Count" />}
                  {count === 100 && (
                    <>
                      <Button onClick={onReset} label="Start Over" />
                      <Link to="/game">
                        <Button label="Next Game" />
                      </Link>
                    </>
                  )}
                  {count !== 100 && <Button onClick={onReset} label="Reset" />}
                </div>
              </div>
              <Message msg={msg} />
            </div>
          }
        />
        <Route path="/game" element={<Game2 onReset={onReset} />} />
      </Routes>
    </Router>
  );
};

export default App;

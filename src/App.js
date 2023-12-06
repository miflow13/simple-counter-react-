// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CounterGame from './CounterGame';
import './styles.css';

const Homepage = () => (
  <div>
    <h1>Welcome to the Clicker Game!</h1>
    <p>Click the "Start" button to begin the game.</p>
    <Link to="/game">
      <button>Start</button>
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/game" element={<CounterGame />} />
      </Routes>
    </Router>
  );
};

export default App;

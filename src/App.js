// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CounterGame from './CounterGame';
import ColorGame from './ColorGame';
import './styles.css';

const Homepage = () => (
  <div>
    <h1>Welcome to my collection of games!</h1>
    <p>Click the "Start" button to begin the first game.</p>
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
        <Route path="/Colorgame" element={<ColorGame />} />
      </Routes>
    </Router>
  );
};

export default App;

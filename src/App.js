// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CounterGame from "./CounterGame";
import Navbar from "./navbar";
import ColorGame from "./ColorGame";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

const Homepage = () => (
  <div>
    <h1>Welcome to my collection of games!</h1>
    <p>Click the "Start" button to begin the first game.</p>
    <Link to="/CounterGame">
      <button>Start</button>
    </Link>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/CounterGame" element={<CounterGame />} />
        <Route path="/ColorGame" element={<ColorGame />} />
        {/* Add more routes for other pages if needed */}
      </Routes>
    </Router>
  );
};

export default App;

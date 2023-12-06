// Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/ColorGame">
                Color Game
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Game2">
                Game 2
              </Link>
            </li>
            {/* Add more links for other pages if needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

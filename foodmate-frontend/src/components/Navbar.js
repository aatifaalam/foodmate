import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/receive">Receive</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar; 
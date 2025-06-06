import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold text-purple-800">foodmate</h1>
      <nav className="flex space-x-4">
        <Link to="/" className="text-gray-600 hover:text-purple-800">Our Vision</Link>
        <Link to="/learn-more" className="text-gray-600 hover:text-purple-800">Learn More</Link>
        <Link to="/get-involved" className="text-gray-600 hover:text-purple-800">Get Involved</Link>
      </nav>
    </header>
  );
}

export default Header; 
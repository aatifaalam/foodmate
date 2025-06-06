import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Donate from './pages/Donate';
import Receive from './pages/Receive';
import Navbar from './components/Navbar';

// Components for the pages
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/receive" element={<Receive />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

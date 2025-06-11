import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      {/* Top Navigation Bar */}
      <nav className="top-nav">
        <div className="nav-content">
          <div className="nav-left">
            <select className="language-select">
              <option value="en">English</option>
            </select>
          </div>
          <div className="nav-center">
            <span className="promo-badge">NEW</span>
            <span className="promo-text">
              Want to win a £25 Iceland voucher? Claim a Lucky Dip bag 🛍️ by 13th June to enter our prize draw
            </span>
            <a href="#" className="promo-link">here</a>
          </div>
          <div className="nav-right">
            <a href="#" className="volunteer-link">Volunteer Hub sign-in →</a>
          </div>
        </div>
      </nav>

      {/* Main Navigation */}
      <div className="main-nav">
        <div className="nav-content">
          <Link to="/" className="logo">FoodMate</Link>
          <div className="nav-links">
            <Link to="/our-vision">Our vision</Link>
            <Link to="/learn-more">Learn more</Link>
            <Link to="/get-involved">Get involved</Link>
            <div className="nav-buttons">
              <Link to="/at-home" className="nav-button">At home</Link>
              <Link to="/at-work" className="nav-button secondary">At work</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-left">
          <h1 className="main-heading">
            <span className="heading-primary">Share more,</span>
            <br />
            <span className="heading-secondary">waste less</span>
          </h1>
          <p className="main-description">
            Beat waste with FoodMate: the app for finding what you need and sharing what you don't with local people.
          </p>
          <Link to="/download" className="get-app-button">
            Get the app
          </Link>
        </div>

        <div className="content-right">
          <div className="phone-mockup-container">
            <img 
              src="/assets/phone-mockup.png" 
              alt="FoodMate App Screenshot" 
              className="phone-mockup"
            />
            <div className="gradient-background"></div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home; 
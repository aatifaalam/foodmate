import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Your login logic here
    };

    return (
        <div className="login-page">
            {/* Header */}
            <header className="login-header">
                <div className="header-content">
                    <div className="logo-section">
                        <Link to="/" className="logo">
                            <img src="/assets/logo.png" alt="FoodMate" className="logo-image" />
                            <span className="logo-text">Volunteer Hub</span>
                        </Link>
                    </div>
                    <div className="header-links">
                        <Link to="/" className="website-link">FoodMate Website</Link>
                        <Link to="/login" className="login-link">Login</Link>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <p className="welcome-text">
                        Welcome! Please use the same login details that you use for the app
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">
                                <span className="required">*</span>Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">
                                <span className="required">*</span>Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="remember-me">
                            <label className="checkbox-container">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                <span className="checkmark"></span>
                                Remember me on this device for 30 days
                            </label>
                        </div>

                        <Link to="/forgot-password" className="forgot-password">
                            Forgot password?
                        </Link>

                        <button type="submit" className="login-button">
                            Login
                        </button>

                        <Link to="/magic-link" className="magic-link">
                            Or login via magic link
                        </Link>
                    </form>
                </div>

                {/* FAQ Button */}
                <div className="faq-button">
                    <button>
                        <span className="faq-icon">❓</span>
                        FAQs
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Login; 
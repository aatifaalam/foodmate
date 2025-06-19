import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import FaqModal from '../components/FaqModal';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isFaqOpen, setIsFaqOpen] = useState(false);

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

                    {/* Login with Google Button */}
                    <a
                        href="http://localhost:8081/oauth2/authorization/google"
                        className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg mb-4 transition-colors"
                    >
                        <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.13 2.7 30.45 0 24 0 14.82 0 6.73 5.48 2.69 13.44l7.98 6.19C12.13 13.13 17.62 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.5c0-1.64-.15-3.22-.42-4.74H24v9.04h12.42c-.54 2.9-2.18 5.36-4.64 7.04l7.19 5.6C43.93 37.13 46.1 31.3 46.1 24.5z"/><path fill="#FBBC05" d="M10.67 28.13c-1.13-3.36-1.13-6.9 0-10.26l-7.98-6.19C.9 15.7 0 19.74 0 24c0 4.26.9 8.3 2.69 12.32l7.98-6.19z"/><path fill="#EA4335" d="M24 48c6.45 0 12.13-2.13 16.19-5.81l-7.19-5.6c-2.01 1.35-4.59 2.16-9 2.16-6.38 0-11.87-3.63-13.33-8.69l-7.98 6.19C6.73 42.52 14.82 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></g></svg>
                        Login with Google
                    </a>

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
                <button
                    onClick={() => setIsFaqOpen(true)}
                    className="fixed bottom-8 right-8 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                    <span className="text-xl">❓</span>
                    <span className="font-medium">FAQs</span>
                </button>

                {/* FAQ Modal */}
                <FaqModal isOpen={isFaqOpen} onClose={() => setIsFaqOpen(false)} />
            </main>
        </div>
    );
};

export default Login; 
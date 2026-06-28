    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './Login.css';

    const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });

    const validate = () => {
        const newErrors = { email: '', password: '' };
        let isValid = true;

        if (!email.includes('@')) {
        newErrors.email = 'Please enter a valid email';
        isValid = false;
        }
        if (password.length < 8) {
        newErrors.password = 'Password must be at least 8 characters';
        isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleLogin = () => {
        if (validate()) {
        console.log('Logging in:', { email, password });
        navigate('/connect');
        }
    };

    return (
        <div className="login-page">

        {/* Dark overlay */}
        <div className="login-overlay" />

        {/* Top-left logo */}
        <div className="login-top-logo">
            <img src="/logo.png" alt="PocketSync Logo" />
        </div>

        {/* Bottom-left welcome text */}
        <div className="login-welcome">
            <h1 className="login-welcome-title">
            Welcome To<br />PocketSync
            </h1>
            <p className="login-welcome-sub">
            All your accounts. One clear financial view
            </p>
        </div>

        {/* White card */}
        <div className="login-card">
            <h2 className="login-card-title">Welcome Back</h2>
            <p className="login-card-subtitle">
            your finances are waiting. Pick up right where you left off — your
            accounts, balances, and insights are all in sync.
            </p>

            {/* Email */}
            <div className="login-field">
            <label className="login-floating-label">
                Email <span className="login-required">*</span>
            </label>
            <input
                className={`login-input ${errors.email ? 'login-input-error' : ''}`}
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
                <span className="login-error-text">{errors.email}</span>
            )}
            </div>

            {/* Password */}
            <div className="login-field">
            <label className="login-floating-label">
                Password <span className="login-required">*</span>
            </label>
            <input
                className={`login-input ${errors.password ? 'login-input-error' : ''}`}
                type="password"
                placeholder="Confirm Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
                <span className="login-error-text">{errors.password}</span>
            )}
            </div>

            {/* Log In Button */}
            <button className="login-btn-primary" onClick={handleLogin}>
            Log In
            </button>

            {/* Divider */}
            <div className="login-divider">
            <span>Or continue with</span>
            </div>

            {/* Google Button */}
            <button className="login-btn-google">
            <svg width="20" height="20" viewBox="0 0 18 18">
                <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
                <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
                <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
                <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
            </svg>
            Log in with Google
            </button>

            {/* Signup link */}
            <p className="login-signup-link">
            Don't have an account?{' '}
            <span
                className="login-link"
                onClick={() => navigate('/signup')}
            >
                Create one
            </span>
            </p>
        </div>
        </div>
    );
    };

    export default Login;
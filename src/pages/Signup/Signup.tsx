import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';
import { useDispatch } from 'react-redux';
import { setUser } from '../../slices/authSlice';
import type { AppDispatch } from '../../store';
import { registerUser } from '../../services/api';
import axios from 'axios';


const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = () => {
    const newErrors = { name: '', email: '', password: '', confirmPassword: '' };
    let isValid = true;

    if (!name.trim()) {
      newErrors.name = 'Full name is required';
      isValid = false;
    }
    if (!email.includes('@')) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }
    if (password.length < 8) {
      newErrors.password = 'At least 8 characters';
      isValid = false;
    }
    if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
  if (validate()) {
    try {
      const data = await registerUser(name, email, password);
      localStorage.setItem('token', data.token);
      dispatch(setUser({
        id: data.user.id,
        name: data.user.fullname,
        email: data.user.email,
      }));
      navigate('/connect');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          setErrors(prev => ({ ...prev, email: 'This email is already in use' }));
        } else {
          console.error('Signup failed:', error);
        }
      }
  }
};

  return (
    <div className="signup-page">

      {/* Top-left logo */}
      <div className="signup-top-logo">
        <img src="/logo.png" alt="PocketSync Logo" width="48" height="48" />
      </div>

      {/* Bottom-left welcome text */}
      <div className="signup-welcome">
        <h1 className="signup-welcome-title">Welcome To<br />PocketSync</h1>
        <p className="signup-welcome-sub">All your accounts. One clear financial view</p>
      </div>

      {/* Floating form card on the right */}
      <div className="signup-card">
        <h2 className="signup-card-title">Create your account</h2>
        <p className="signup-card-subtitle">
          Connect your banks, wallets, and cards. PocketSync keeps
          everything in sync so you always know where you stand.
        </p>

        {/* Full Name */}
        <div className="signup-field">
          <label className="signup-floating-label">
            Full Name <span className="signup-required">*</span>
          </label>
          <input
            className={`signup-input ${errors.name ? 'signup-input-error' : ''}`}
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="signup-error-text">{errors.name}</span>}
        </div>

        {/* Email */}
        <div className="signup-field">
          <label className="signup-floating-label">
            Email <span className="signup-required">*</span>
          </label>
          <input
            className={`signup-input ${errors.email ? 'signup-input-error' : ''}`}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="signup-error-text">{errors.email}</span>}
        </div>

        {/* Password Row — two fields side by side */}
        <div className="signup-password-row">
          <div className="signup-field">
            <label className="signup-floating-label">
              Password <span className="signup-required">*</span>
            </label>
            <input
              className={`signup-input ${errors.password ? 'signup-input-error' : ''}`}
              type="password"
              placeholder="Set Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="signup-error-text">{errors.password}</span>}
          </div>

          <div className="signup-field">
            <label className="signup-floating-label">
              Password <span className="signup-required">*</span>
            </label>
            <input
              className={`signup-input ${errors.confirmPassword ? 'signup-input-error' : ''}`}
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <span className="signup-error-text">{errors.confirmPassword}</span>
            )}
          </div>
        </div>

        {/* Sign Up Button */}
        <button className="signup-btn-primary" onClick={handleSignup}>
          Sign up
        </button>

        {/* Divider */}
        <div className="signup-divider">
          <span>Or continue with</span>
        </div>

        {/* Google Button */}
        <button className="signup-btn-google">
          <svg width="20" height="20" viewBox="0 0 18 18">
            <path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18z"/>
            <path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17z"/>
            <path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07z"/>
            <path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3z"/>
          </svg>
          Sign up with Google
        </button>

        {/* Login link */}
        <p className="signup-login-link">
          Already have an Account{' '}
          <span className="signup-link" onClick={() => navigate('/login')}>
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
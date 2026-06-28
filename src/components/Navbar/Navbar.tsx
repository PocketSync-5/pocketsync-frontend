import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import type { AppDispatch } from '../../store';
import { logout } from '../../slices/authSlice';
import './Navbar.css';

const Navbar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        localStorage.removeItem('token');
        navigate('/');
    };

    return (
        <nav className="navbar">
        <div className="navbar-logo">
        <span className="navbar-logo-icon">⟳</span>
        <span className="navbar-logo-text">PocketSync</span>
        </div>

        <div className="navbar-right">
            <div className="navbar-avatar">U</div>
            <button className="navbar-logout" onClick={handleLogout}>
            Logout
            </button>
        </div>
    </nav>
    );
};

export default Navbar;
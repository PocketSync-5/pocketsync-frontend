import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: '📊' },
    { label: 'Accounts', path: '/accounts', icon: '🏦' },
    { label: 'Transactions', path: '/transactions', icon: '💳' },
    { label: 'Analytics', path: '/analytics', icon: '📈' },
    { label: 'Settings', path: '/settings', icon: '⚙️' },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        <button
            className="sidebar-toggle"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? '✕' : '☰'}
        </button>

        {isOpen && (
            <div
            className="sidebar-backdrop"
            onClick={() => setIsOpen(false)}
            />
        )}

        <aside className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
            <nav className="sidebar-nav">
            {navItems.map((item) => (
                <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`
                }
                onClick={() => setIsOpen(false)}
            >
                <span className="sidebar-icon">{item.icon}</span>
                <span className="sidebar-label">{item.label}</span>
                </NavLink>
            ))}
            </nav>
        </aside>
        </>
    );
};

export default Sidebar;
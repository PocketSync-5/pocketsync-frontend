    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './Accounts.css';

    const accounts = [
    {
        id: 1,
        name: 'Access Bank',
        type: 'Current',
        number: '0117151716',
        balance: '₦12,000',
        initial: 'A',
        color: '#f0a500',
        bg: '#fff3e0',
        category: 'bank',
    },
    {
        id: 2,
        name: 'Kuda',
        type: 'Current',
        number: '0117151716',
        balance: '₦15,500',
        initial: 'K',
        color: '#7c3aed',
        bg: '#f5f3ff',
        category: 'bank',
    },
    {
        id: 3,
        name: 'Opay',
        type: 'Savings',
        number: '0117151716',
        balance: '₦12,000',
        initial: 'O',
        color: '#16a34a',
        bg: '#f0fdf4',
        category: 'wallet',
    },
    {
        id: 4,
        name: 'Moniepoint',
        type: 'Savings',
        number: '0117151716',
        balance: '₦18,250',
        initial: 'M',
        color: '#2563eb',
        bg: '#eff6ff',
        category: 'wallet',
    },
    ];

    const navItems = [
    { label: 'Dashboard', icon: '⊙', path: '/dashboard' },
    { label: 'Accounts', icon: '○', path: '/accounts', active: true },
    { label: 'Payment', icon: '▣', path: '/payments' },
    { label: 'Cards', icon: '◇', path: '/cards' },
    ];

    const bottomNav = [
    { label: 'Settings', icon: '⚙', path: '/settings' },
    { label: 'Support', icon: '▣', path: '/support' },
    { label: 'Log out', icon: '→', path: '/' },
    ];

    const barHeights = [30, 45, 35, 55, 40, 60, 50, 70, 55, 80, 65, 100];

    const Accounts = () => {
    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All Accounts');

    const filtered = activeFilter === 'All Accounts'
        ? accounts
        : activeFilter === 'Banks'
        ? accounts.filter(a => a.category === 'bank')
        : accounts.filter(a => a.category === 'wallet');

    return (
        <div className="af-page">

        {/* ── Sidebar ── */}
        <aside className="af-sidebar">
            <div className="af-sidebar-top">
            <div className="af-logo-row">
                <img src="/logo.png" alt="PocketSync" className="af-logo" />
                <span className="af-brand">PocketSync</span>
            </div>
            <nav className="af-nav">
                {navItems.map((item) => (
                <div
                    key={item.label}
                    className={`af-nav-item ${item.active ? 'af-nav-active' : ''}`}
                    onClick={() => navigate(item.path)}
                >
                    <span className="af-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                </div>
                ))}
            </nav>
            </div>
            <div className="af-sidebar-bottom">
            {bottomNav.map((item) => (
                <div
                key={item.label}
                className="af-nav-item"
                onClick={() => navigate(item.path)}
                >
                <span className="af-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                </div>
            ))}
            </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="af-main">

            {/* Header */}
            <div className="af-header">
            <div>
                <h1 className="af-title">Accounts</h1>
                <p className="af-subtitle">4 connected. Last synced 4 mins ago</p>
            </div>
            <button
                className="af-add-btn"
                onClick={() => navigate('/connect')}
            >
                + Add Account
            </button>
            </div>

            {/* Balance Card with Chart */}
            <div className="af-balance-card">
            <div className="af-balance-left">
                <p className="af-balance-label">Total Net Balance</p>
                <h2 className="af-balance-amount">₦57,750.00</h2>
                <p className="af-balance-growth">+ ₦69,000 this month</p>
            </div>
            <div className="af-chart">
                {barHeights.map((h, i) => (
                <div
                    key={i}
                    className={`af-bar ${i === barHeights.length - 1 ? 'af-bar-active' : ''}`}
                    style={{ height: `${h}%` }}
                />
                ))}
            </div>
            </div>

            {/* Filter Tabs */}
            <div className="af-filters">
            {['All Accounts', 'Banks', 'Wallets'].map((f) => (
                <button
                key={f}
                className={`af-filter-btn ${activeFilter === f ? 'af-filter-active' : ''}`}
                onClick={() => setActiveFilter(f)}
                >
                {f}
                </button>
            ))}
            </div>

            {/* Account Cards Grid */}
            <div className="af-cards-grid">
            {filtered.map((acc) => (
                <div key={acc.id} className="af-account-card">
                <div
                    className="af-account-avatar"
                    style={{ backgroundColor: acc.bg, color: acc.color }}
                >
                    {acc.initial}
                </div>
                <p className="af-account-name">{acc.name}</p>
                <p className="af-account-type">{acc.type}</p>
                <p className="af-account-number">{acc.number}</p>
                <p className="af-account-balance">{acc.balance}</p>
                <span className="af-synced-badge">Synced</span>
                </div>
            ))}

            {/* Add Account Card */}
            <div
                className="af-add-card"
                onClick={() => navigate('/connect')}
            >
                <span className="af-add-plus">+</span>
                <p className="af-add-label">Add Account</p>
            </div>
            </div>

            {/* Summary Cards */}
            <div className="af-summary-row">
            <div className="af-summary-card">
                <p className="af-summary-title">Total Income</p>
                <p className="af-summary-amount">₦1,250,000.00</p>
                <p className="af-summary-sub">This month</p>
            </div>
            <div className="af-summary-card">
                <p className="af-summary-title">Total Expenses</p>
                <p className="af-summary-amount">₦680,000.00</p>
                <p className="af-summary-sub">This month</p>
            </div>
            <div className="af-summary-card">
                <p className="af-summary-title">Accounts</p>
                <p className="af-summary-amount">Four connected</p>
                <p className="af-summary-sub">One bank - Three fintech</p>
            </div>
            </div>

        </main>
        </div>
    );
    };

    export default Accounts;
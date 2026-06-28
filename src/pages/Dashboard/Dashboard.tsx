    import { useNavigate } from 'react-router-dom';
    import './Dashboard.css';

    const accounts = [
    { name: 'Access Bank', type: 'Salary Account', balance: '₦12,000.00', initial: 'A', color: '#f0a500', bg: '#fff3e0' },
    { name: 'Kuda', type: 'Daily Spending', balance: '₦15,500.00', initial: 'K', color: '#7c3aed', bg: '#f5f3ff' },
    { name: 'Opay', type: 'Everyday Wallet', balance: '₦12,000.00', initial: 'O', color: '#16a34a', bg: '#f0fdf4' },
    { name: 'Moniepoint', type: 'Business Account', balance: '₦18,250.00', initial: 'M', color: '#2563eb', bg: '#eff6ff' },
    ];

    const stackedCards = [
    { name: 'Access Bank', balance: '₦12,000.00', color: '#9333ea' },
    { name: 'Kuda', balance: '₦15,500.00', color: '#ec4899' },
    { name: 'Moniepoint', balance: '₦18,250.00', color: '#f97316' },
    { name: 'Opay', balance: '₦12,000.00', color: '#0d9488' },
    ];

    const recentActivity = [
    { icon: 'N', iconBg: '#E50914', name: 'Netflix Subscription', sub: 'Today, 11:43am - Opay', amount: '₦12,000.00' },
    { icon: '⛽', iconBg: '#1a1a8c', name: 'Fuel Purchase', sub: 'Today, 11:18am - Opay', amount: '₦12,000.00' },
    { icon: '↑', iconBg: '#1a1a8c', name: 'Transfer to Naomi', sub: 'Yesterday, 4:01am - Kuda', amount: '₦12,000.00' },
    { icon: '↓', iconBg: '#1a1a8c', name: 'Salary Credit', sub: 'Yesterday, 9:20am - Access bank', amount: '₦12,000.00' },
    { icon: '↓', iconBg: '#1a1a8c', name: 'Transfer from Joe', sub: 'Yesterday 8:00am - Moniepoint', amount: '₦12,000.00' },
    ];

    const navItems = [
    { label: 'Dashboard', icon: '⊙', path: '/dashboard', active: true },
    { label: 'Accounts', icon: '○', path: '/accounts' },
    { label: 'Payment', icon: '▣', path: '/payments' },
    { label: 'Cards', icon: '◇', path: '/cards' },
    ];

    const bottomNav = [
    { label: 'Settings', icon: '⚙', path: '/settings' },
    { label: 'Support', icon: '▣', path: '/support' },
    { label: 'Log out', icon: '→', path: '/' },
    ];

    const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="dash-page">

        {/* ── Sidebar ── */}
        <aside className="dash-sidebar">
            <div className="dash-sidebar-top">
            <div className="dash-logo-row">
                <img src="/logo.png" alt="PocketSync" className="dash-logo" />
                <span className="dash-brand">PocketSync</span>
            </div>
            <nav className="dash-nav">
                {navItems.map((item) => (
                <div
                    key={item.label}
                    className={`dash-nav-item ${item.active ? 'dash-nav-active' : ''}`}
                    onClick={() => navigate(item.path)}
                >
                    <span className="dash-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                </div>
                ))}
            </nav>
            </div>
            <div className="dash-sidebar-bottom">
            {bottomNav.map((item) => (
                <div
                key={item.label}
                className="dash-nav-item"
                onClick={() => navigate(item.path)}
                >
                <span className="dash-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                </div>
            ))}
            </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="dash-main">

            {/* ── Left Column ── */}
            <div className="dash-left">

            {/* Top Header */}
            <div className="dash-header">
                <div>
                <h1 className="dash-greeting">Good morning, Adeleke</h1>
                <p className="dash-greeting-sub">How're you doing today?</p>
                </div>
                <div className="dash-header-right">
                <span className="dash-bell">🔔</span>
                <div className="dash-avatar">A</div>
                </div>
            </div>

            {/* Stacked Cards */}
            <div className="dash-wallet">
                <div className="dash-stacked-cards">
                {stackedCards.map((card, i) => (
                    <div
                    key={card.name}
                    className="dash-card-chip"
                    style={{
                        backgroundColor: card.color,
                        zIndex: stackedCards.length - i,
                        top: `${i * 28}px`,
                    }}
                    >
                    <span className="dash-chip-name">{card.name}</span>
                    <span className="dash-chip-balance">{card.balance}</span>
                    </div>
                ))}
                </div>

                <div className="dash-wallet-bottom">
                <p className="dash-total">₦57,750.00</p>
                <p className="dash-total-sub">Total Balance across 4 connected accounts</p>
                <button
                    className="dash-connect-btn"
                    onClick={() => navigate('/connect')}
                >
                    Connect Account
                </button>
                </div>
            </div>

            <p className="dash-synced">🕐 Last synced 4 minutes ago</p>

            {/* Your Accounts */}
            <div className="dash-accounts-section">
                <div className="dash-section-header">
                <h2 className="dash-section-title">Your Accounts</h2>
                <span
                    className="dash-view-all"
                    onClick={() => navigate('/accounts')}
                >
                    View All
                </span>
                </div>

                <div className="dash-accounts-list">
                {accounts.map((acc) => (
                    <div key={acc.name} className="dash-account-item">
                    <div className="dash-account-left">
                        <div
                        className="dash-account-avatar"
                        style={{ backgroundColor: acc.bg, color: acc.color }}
                        >
                        {acc.initial}
                        </div>
                        <div>
                        <p className="dash-account-name">{acc.name}</p>
                        <p className="dash-account-type">{acc.type}</p>
                        </div>
                    </div>
                    <div className="dash-account-right">
                        <span className="dash-account-balance">{acc.balance}</span>
                        <span className="dash-account-arrow">›</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            {/* Encryption Banner */}
            <div className="dash-encryption">
                <div className="dash-encryption-icon">🔒</div>
                <div>
                <p className="dash-encryption-title">Bank-level encryption</p>
                <p className="dash-encryption-sub">
                    Your data is protected through secure Open Banking Connections
                </p>
                </div>
            </div>

            </div>

            {/* ── Right Column ── */}
            <div className="dash-right">

            {/* Financial Snapshot */}
            <div className="dash-snapshot">
                <div className="dash-snapshot-header">
                <div className="dash-snapshot-icon">💲</div>
                <h2 className="dash-snapshot-title">Financial Snapshot</h2>
                </div>

                <div className="dash-snapshot-card">
                <div className="dash-snapshot-top">
                    <p className="dash-snapshot-period">This month</p>
                    <span className="dash-snapshot-arrow">›</span>
                </div>
                <div className="dash-snapshot-row">
                    <span className="dash-snapshot-label">Income</span>
                    <span className="dash-snapshot-value">₦1,250,000.00</span>
                </div>
                <div className="dash-snapshot-row">
                    <span className="dash-snapshot-label">Expenses</span>
                    <span className="dash-snapshot-value">₦680,000.00</span>
                </div>
                <div className="dash-snapshot-divider" />
                <div className="dash-snapshot-row">
                    <span className="dash-snapshot-label">Net Balance</span>
                    <span className="dash-snapshot-net">₦570,000.00</span>
                </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="dash-activity">
                <div className="dash-section-header">
                <h2 className="dash-section-title">Recent Activity</h2>
                <span
                    className="dash-view-all"
                    onClick={() => navigate('/accounts')}
                >
                    View All
                </span>
                </div>

                <div className="dash-activity-list">
                {recentActivity.map((tx, i) => (
                    <div key={i} className="dash-activity-item">
                    <div className="dash-activity-left">
                        <div
                        className="dash-activity-icon"
                        style={{ backgroundColor: tx.iconBg }}
                        >
                        {tx.icon}
                        </div>
                        <div>
                        <p className="dash-activity-name">{tx.name}</p>
                        <p className="dash-activity-sub">{tx.sub}</p>
                        </div>
                    </div>
                    <div className="dash-activity-right">
                        <span className="dash-activity-amount">{tx.amount}</span>
                        <span className="dash-activity-arrow">›</span>
                    </div>
                    </div>
                ))}
                </div>
            </div>

            </div>
        </main>
        </div>
    );
    };

    export default Dashboard;
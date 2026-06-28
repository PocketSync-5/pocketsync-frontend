    import { useState } from 'react';
    import { useNavigate } from 'react-router-dom';
    import './Payments.css';

    const transactions = [
    {
        id: 1,
        icon: 'N',
        iconBg: '#E50914',
        merchant: 'Netflix Subscription',
        category: 'Utilities',
        account: 'Opay',
        date: 'Today, 11:43am',
        amount: '₦12,000.00',
        type: 'debit',
    },
    {
        id: 2,
        icon: '⛽',
        iconBg: '#1a1a8c',
        merchant: 'Fuel Purchase',
        category: 'Household',
        account: 'Opay',
        date: 'Today, 11:18am',
        amount: '₦12,000.00',
        type: 'debit',
    },
    {
        id: 3,
        icon: '↑',
        iconBg: '#1a1a8c',
        merchant: 'Transfer to Naomi',
        category: 'Transfer',
        account: 'Kuda',
        date: 'June 20, 12:00pm',
        amount: '₦12,000.00',
        type: 'debit',
    },
    {
        id: 4,
        icon: '↓',
        iconBg: '#1a1a8c',
        merchant: 'Salary Credit',
        category: 'Income',
        account: 'Access Bank',
        date: 'June 20, 9:20am',
        amount: '₦12,000.00',
        type: 'credit',
    },
    {
        id: 5,
        icon: '↓',
        iconBg: '#1a1a8c',
        merchant: 'Transfer from Joe',
        category: 'Transfer',
        account: 'Moniepoint',
        date: 'June 19, 8:00am',
        amount: '₦12,000.00',
        type: 'credit',
    },
    ];

        const navItems = [
    { label: 'Dashboard', icon: '⊙', path: '/dashboard' },
    { label: 'Accounts', icon: '○', path: '/accounts', active: true },
    { label: 'Payment', icon: '▣', path: '/payments' },
    { label: 'Cards', icon: '◇', path: '/cards' },
    ];

    const bottomNav = [
    { label: 'Settings', icon: '⚙' },
    { label: 'Support', icon: '▣' },
    { label: 'Log out', icon: '→' },
    ];

    const summaryCards = [
    {
        title: 'Total Income',
        amount: '₦1,250,000.00',
        sub: 'This month',
    },
    {
        title: 'Total Expenses',
        amount: '₦680,000.00',
        sub: 'This month',
    },
    {
        title: 'Transactions',
        amount: '59',
        sub: 'Across four accounts',
    },
    {
        title: 'Average per day',
        amount: '₦32,500',
        sub: 'Last 30 days',
    },
    ];

    const Payments = () => {
    const [showExport, setShowExport] = useState(false);

    const navigate = useNavigate();
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? transactions
        : transactions.filter(t => t.type === activeFilter.toLowerCase());

    return (
        <div className="pay-page">

        {/* ── Sidebar ── */}
        <aside className="pay-sidebar">
            <div className="pay-sidebar-top">
            <div className="pay-logo-row">
                 <img src="/logo2.png" alt="PocketSync" className="vf-brand-logo" />
                <span className="pay-brand">PocketSync</span>
            </div>

            <nav className="pay-nav">
                {navItems.map((item) => (
                <div
                    key={item.label}
                    className={`pay-nav-item ${item.active ? 'pay-nav-active' : ''}`}
                    onClick={() => navigate(item.path)}
                >
                    <span className="pay-nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                </div>
                ))}
            </nav>
            </div>

            <div className="pay-sidebar-bottom">
            {bottomNav.map((item) => (
                <div key={item.label} className="pay-nav-item pay-nav-bottom">
                <span className="pay-nav-icon">{item.icon}</span>
                <span>{item.label}</span>
                </div>
            ))}
            </div>
        </aside>

        {/* ── Main Content ── */}
        <main className="pay-main">

            {/* Header */}
            <div className="pay-header">
            <div className="pay-header-left">
                <h1 className="pay-title">Accounts</h1>
                <p className="pay-subtitle">
                All transactions across 4 accounts · June 2026
                </p>
            </div>
            <div className="pay-header-right">
                    <button className="pay-export-btn" onClick={() => setShowExport(true)}>
                        Export PDF ↑
                    </button>
                <button className="pay-date-btn">
                June, 2026 📅
                </button>
            </div>
            </div>

            {/* Summary Cards */}
            <div className="pay-summary-cards">
            {summaryCards.map((card) => (
                <div key={card.title} className="pay-summary-card">
                <p className="pay-summary-title">{card.title}</p>
                <p className="pay-summary-amount">{card.amount}</p>
                <p className="pay-summary-sub">{card.sub}</p>
                </div>
            ))}
            </div>

            {/* Filter Tabs */}
            <div className="pay-filters">
            {['All', 'Debit', 'Credit'].map((f) => (
                <button
                key={f}
                className={`pay-filter-btn ${activeFilter === f ? 'pay-filter-active' : ''}`}
                onClick={() => setActiveFilter(f)}
                >
                {f}
                </button>
            ))}
            </div>

            {/* Transaction Table */}
            <div className="pay-table-wrapper">
            <table className="pay-table">
                <thead>
                <tr>
                    <th>Merchant</th>
                    <th>Category</th>
                    <th>Account</th>
                    <th>Date</th>
                    <th>Amount</th>
                </tr>
                </thead>
                <tbody>
                {filtered.map((tx) => (
                    <tr key={tx.id}>
                    <td>
                        <div className="pay-merchant">
                        <div
                            className="pay-merchant-icon"
                            style={{ backgroundColor: tx.iconBg }}
                        >
                            {tx.icon}
                        </div>
                        <span>{tx.merchant}</span>
                        </div>
                    </td>
                    <td>{tx.category}</td>
                    <td>{tx.account}</td>
                    <td>{tx.date}</td>
                    <td className="pay-amount">{tx.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            </div>

        </main>
        
        {/* Export PDF Modal */}
        {showExport && (
        <div className="export-backdrop" onClick={() => setShowExport(false)}>
            <div className="export-card" onClick={(e) => e.stopPropagation()}>

            {/* Logo */}
            <div className="export-logo-row">
                <img src="/logo.png" alt="PocketSync" className="export-logo" />
                <span className="export-brand">PocketSync</span>
            </div>

            {/* Header */}
            <div className="export-header">
                <h2 className="export-title">Account</h2>
                <span className="export-date">June, 2026</span>
            </div>

            {/* Transaction List */}
            <div className="export-list">
                {transactions.map((tx) => (
                <div key={tx.id} className="export-item">
                    <div className="export-item-left">
                    <div
                        className="export-item-icon"
                        style={{ backgroundColor: tx.iconBg }}
                    >
                        {tx.icon}
                    </div>
                    <div className="export-item-info">
                        <p className="export-item-name">{tx.merchant}</p>
                        <p className="export-item-sub">
                        {tx.date} · {tx.account}
                        </p>
                    </div>
                    </div>
                    <span className="export-item-amount">{tx.amount}</span>
                </div>
                ))}
            </div>

            {/* Export Button */}
            <button
                className="export-btn"
                onClick={() => {
                window.print();
                setShowExport(false);
                }}
            >
                Export
            </button>

            </div>
        </div>
        )}
        </div>
    );
    };

    export default Payments;
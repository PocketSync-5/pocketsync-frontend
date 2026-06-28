    import { useNavigate } from 'react-router-dom';
    import './AuthHandoff.css';

    const steps = [
    {
        icon: '→',
        title: 'Initiating Secure Session',
        subtitle: 'Establishing encrypted channel',
        status: 'Done',
        statusClass: 'status-done',
    },
    {
        icon: '🏦',
        title: 'Redirecting to Access Bank',
        subtitle: 'You log in directly with your bank',
        status: 'Redirecting',
        statusClass: 'status-redirecting',
    },
    {
        icon: '🔐',
        title: 'Awaiting Authorisation',
        subtitle: 'Approve read-only access in your bank',
        status: 'Authorised',
        statusClass: 'status-authorised',
    },
    {
        icon: '↻',
        title: 'Importing Transactions',
        subtitle: 'Pulling last 90 days of history',
        status: 'Completed',
        statusClass: 'status-completed',
    },
    ];

    const securityItems = [
    {
        icon: '🔒',
        title: '256-bit encrypted',
        desc: 'Your login goes directly to your bank. PocketSync never receives your password.',
    },
    {
        icon: '🚫',
        title: 'Read-only access',
        desc: 'we can view balances and transactions, nothing else.',
    },
    {
        icon: '⏹',
        title: 'Revoke anytime',
        desc: 'Disconnect from PocketSync settings or directly from your bank.',
    },
    ];

    const AuthHandoff = () => {
    const navigate = useNavigate();

    return (
        <div className="auth-page">
        <div className="auth-card">

            {/* ── Left Panel ── */}
            <div className="auth-left">

            {/* Logo */}
            <div className="auth-logo-row">
                <img src="/logo.png" alt="PocketSync" className="auth-logo" />
                <span className="auth-brand">PocketSync</span>
            </div>

            {/* Heading */}
            <div className="auth-heading">
                <h1 className="auth-title">
                Connecting securely to<br />your bank
                </h1>
                <p className="auth-subtitle">
                This usually takes less than 30 seconds.<br />
                Don't close this tab.
                </p>
            </div>

            {/* Security Items */}
            <div className="auth-security-list">
                {securityItems.map((item, index) => (
                <div key={index} className="auth-security-item">
                    <div className="auth-security-icon">{item.icon}</div>
                    <div className="auth-security-text">
                    <p className="auth-security-title">{item.title}</p>
                    <p className="auth-security-desc">{item.desc}</p>
                    </div>
                </div>
                ))}
            </div>

            </div>

            {/* ── Right Panel ── */}
            <div className="auth-right">

            {/* Connection Progress Bar */}
            <div className="auth-progress-bar">
                <div className="auth-progress-icon auth-progress-pocket">
                <img src="/logo.png" alt="PocketSync" width="28" height="28" />
                </div>
                <div className="auth-progress-line" />
                <div className="auth-progress-icon auth-progress-cloud">
                ☁
                </div>
                <div className="auth-progress-line" />
                <div className="auth-progress-icon-wrap">
                <div className="auth-progress-icon auth-progress-bank">
                    🏦
                </div>
                <span className="auth-progress-bank-label">access</span>
                </div>
            </div>

            {/* Steps */}
            <div className="auth-steps">
                {steps.map((step, index) => (
                <div key={index} className="auth-step">
                    <div className="auth-step-left">
                    <div className="auth-step-icon">{step.icon}</div>
                    <div className="auth-step-text">
                        <p className="auth-step-title">{step.title}</p>
                        <p className="auth-step-subtitle">{step.subtitle}</p>
                    </div>
                    </div>
                    <span className={`auth-step-status ${step.statusClass}`}>
                    {step.status}
                    </span>
                </div>
                ))}
            </div>

            {/* Success Section */}
            <div className="auth-success">
                <div className="auth-success-check">✓</div>
                <p className="auth-success-text">
                All Done! Your account is connected
                </p>
                <button
                className="auth-success-btn"
                onClick={() => navigate('/accounts-found')}
                >
                View Accounts →
                </button>
            </div>

            </div>
        </div>
        </div>
    );
    };

    export default AuthHandoff;
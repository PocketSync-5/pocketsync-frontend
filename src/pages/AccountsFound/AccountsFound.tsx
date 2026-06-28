import { useNavigate } from 'react-router-dom';
import './AccountsFound.css';


const banks = [
  {
    id: 1,
    name: 'Access Bank',
    type: 'Current',
    number: '0117151716',
    balance: '₦12,000.00',
    initial: 'A',
    color: '#f0a500',
    bg: '#fff3e0',
    logo: '/access-bank.png',
  },
];

const wallets = [
  {
    id: 2,
    name: 'Kuda',
    type: 'Current',
    number: '0117151716',
    balance: '₦12,000.00',
    initial: 'K',
    color: '#7c3aed',
    bg: '#f5f3ff',
    logo: '/kuda.png',
  },
  {
    id: 3,
    name: 'Opay',
    type: 'Savings',
    number: '0117151716',
    balance: '₦12,000.00',
    initial: 'O',
    color: '#16a34a',
    bg: '#f0fdf4',
    logo: '/opay.png'
  },
  {
    id: 4,
    name: 'Moniepoint',
    type: 'Savings',
    number: '0117151716',
    balance: '₦12,000.00',
    initial: 'M',
    color: '#ffffff',
    bg: '#1a1a8c',
    logo: '/moniepoint.png',
  },
];

const AccountsFound = () => {
  const navigate = useNavigate();

  return (
    <div className="af-page">

      {/* ── Left Side ── */}
      <div className="af-left">

        {/* Logo */}
        <div className="af-logo-row">
          <img src="/logo.png" alt="PocketSync" className="af-logo" />
          <span className="af-brand">PocketSync</span>
        </div>

        <div className="af-wallet">
            <img
              src="/wallet.png"
              alt="Connected accounts wallet"
              className="af-wallet-img"
            />
        </div>

        {/* User Info */}
        <div className="af-user-info">
          <h2 className="af-user-name">Adeleke Obi</h2>
          <div className="af-user-row">
            <span className="af-user-label">BVN</span>
            <span className="af-user-value">223 *** *** 09</span>
          </div>
          <div className="af-user-row">
            <span className="af-user-label">Phone Number</span>
            <span className="af-user-value">081 **** 0102</span>
          </div>
          <div className="af-user-row">
            <span className="af-user-label">Date of Birth</span>
            <span className="af-user-value">**/**/2002</span>
          </div>
        </div>

      </div>

      {/* ── Right Side ── */}
      <div className="af-right">

        <h1 className="af-title">Accounts found</h1>
        <p className="af-subtitle">
          Hello, Adeleke. We found four accounts matching your BVN
        </p>

        {/* Banks Section */}
        <p className="af-section-label">Banks and Accounts</p>

        <div className="af-accounts-list">
          {banks.map((acc) => (
            <div key={acc.id} className="af-account-item">
              <div className="af-account-left">
                <div
                  className="af-account-avatar"
                  style={{ backgroundColor: acc.bg, color: acc.color }}
                >
                  {acc.logo
                    ? <img src={acc.logo} alt={acc.name} />
                    : acc.initial
                  }
                </div>
                <div className="af-account-info">
                  <p className="af-account-name">{acc.name}</p>
                  <p className="af-account-type">{acc.type}</p>
                  <p className="af-account-number">{acc.number}</p>
                </div>
              </div>
              <span className="af-account-balance">{acc.balance}</span>
            </div>
          ))}
        </div>

        <div className="af-divider" />

        {/* Wallets Section */}
        <div className="af-section-header">
          <p className="af-section-label">Wallets and Fintech</p>
          <span className="af-select-all">Select All</span>
        </div>

        <div className="af-accounts-list">
          {wallets.map((acc) => (
            <div key={acc.id} className="af-account-item">
              <div className="af-account-left">
                <div
                  className="af-account-avatar"
                  style={{ backgroundColor: acc.bg, color: acc.color }}
                >
                  {acc.logo
                    ? <img src={acc.logo} alt={acc.name} />
                    : acc.initial
                  }
                </div>
                <div className="af-account-info">
                  <p className="af-account-name">{acc.name}</p>
                  <p className="af-account-type">{acc.type}</p>
                  <p className="af-account-number">{acc.number}</p>
                </div>
              </div>
              <span className="af-account-balance">{acc.balance}</span>
            </div>
          ))}
        </div>

        {/* Connect Button */}
        <div className="af-btn-row">
          <button
            className="af-connect-btn"
            onClick={() => navigate('/auth-handoff')}
          >
            Connect Accounts →
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccountsFound;
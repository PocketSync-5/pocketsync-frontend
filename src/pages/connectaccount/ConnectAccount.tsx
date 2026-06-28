import { useNavigate } from 'react-router-dom';
import './ConnectAccount.css';

const ConnectAccount = () => {
  const navigate = useNavigate();

  return (
    <div className="connect-page">
      <div className="connect-card">

        {/* Logo + Brand Name */}
        <div className="connect-logo-row">
          <img
            src="/logo.png"
            alt="PocketSync Logo"
            className="connect-logo"
          />
          <span className="connect-brand">PocketSync</span>
        </div>

        {/* Welcome Text */}
        <h1 className="connect-title">
          Welcome To<br />PocketSync
        </h1>

        <p className="connect-subtitle">
          All your accounts. One clear financial view
        </p>

        {/* Button */}
        <button
          className="connect-btn"
          onClick={() => navigate('/verify')}
        >
          Connect Account
        </button>

      </div>
    </div>
  );
};

export default ConnectAccount;
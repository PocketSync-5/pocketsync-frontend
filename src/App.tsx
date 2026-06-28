import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Signup from './pages/Signup/Signup';
import Login from './pages/Login/Login';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Accounts from './pages/Payments/Payments';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Payments from './pages/Payments/Payments';
import ConnectAccount from './pages/connectaccount/ConnectAccount';
import AuthHandoff from './pages/AuthHandoff/AuthHandoff';
import Dashboard from './pages/Dashboard/Dashboard';
import IdentityVerification from './pages/IdentityVerification.tsx/IdentityVerification'
import Accounts from './pages/Accounts/Accounts';
import AccountsFound from './pages/AccountsFound/AccountsFound';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<IdentityVerification />} />
        <Route path="/connect" element={<ConnectAccount />} />
        <Route path="/auth-handoff" element={<AuthHandoff />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/dashboard" element={
          <Layout><Dashboard /></Layout>
        } />
        <Route path="/payments" element={
          <Payments />
        } />
        <Route path="/transactions" element={
          <Layout><Transactions /></Layout>
        } />
        <Route path="/analytics" element={
          <Layout><Analytics /></Layout>
        } />
        <Route path="/settings" element={
          <Layout><Settings /></Layout>
        } />
        <Route path="/accounts-found" element={<AccountsFound />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
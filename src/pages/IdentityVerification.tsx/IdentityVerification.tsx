import { useState } from "react";
import "./IdentityVerification.css";
import { useNavigate } from 'react-router-dom';

export default function IdentityVerification() {
  const [bvn, setBvn] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [nin, setNin] = useState("");
  const [consent, setConsent] = useState(false);
  const [showBvnInfo, setShowBvnInfo] = useState(false);
  const navigate = useNavigate();

  const isValid =
    bvn.trim().length > 0 &&
    dob.trim().length > 0 &&
    phone.trim().length > 0 &&
    consent;

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (!isValid) return;
    // TODO: wire up to your verification API
    console.log("Submitting:", { bvn, dob, phone, nin, consent });
    navigate('/auth-handoff')
  };

  return (
    <div className="vf-page">

      {/* ── Left Panel ── */}
      <div className="vf-left">
        <div className="vf-brand-row">
          <img src="/logo2.png" alt="PocketSync" className="vf-brand-logo" />
          <span className="vf-brand-name">PocketSync</span>
        </div>

        <div className="vf-left-body">
          <h1 className="vf-left-title">
            Identity<br />verification
          </h1>
          <p className="vf-left-desc">
            We use your BVN to securely match and fetch your bank accounts.
          </p>
          <p className="vf-left-desc">
            We never store your BVN. It is used once and discarded.
          </p>
        </div>
      </div>

      {/* ── Right Panel ── */}
      <div className="vf-right">
        <div className="vf-form-card">
          <h2 className="vf-form-title">Verify your identity</h2>
          <p className="vf-form-subtitle">
            Enter your BVN and personal details. This lets us find your linked
            bank accounts automatically.
          </p>
          <a
            href="#"
            className="vf-what-bvn"
            onClick={(e) => { e.preventDefault(); setShowBvnInfo(true); }}
          >
            What is a BVN?
          </a>

          <form onSubmit={handleSubmit} noValidate>

            {/* BVN */}
            <div className="vf-field">
              <label className="vf-label" htmlFor="bvn">
                BVN <span className="required">*</span>
              </label>
              <input
                id="bvn"
                type="text"
                inputMode="numeric"
                maxLength={11}
                placeholder="BVN"
                className="vf-input"
                value={bvn}
                onChange={(e) => setBvn(e.target.value)}
              />
            </div>

            {/* Date of Birth + Phone number */}
            <div className="vf-row">
              <div className="vf-field">
                <label className="vf-label" htmlFor="dob">
                  Date of Birth <span className="required">*</span>
                </label>
                <input
                  id="dob"
                  type="date"
                  className="vf-input"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div className="vf-field">
                <label className="vf-label" htmlFor="phone">
                  Phone number <span className="required">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Phone number"
                  className="vf-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            {/* NIN */}
            <div className="vf-field">
              <label className="vf-label" htmlFor="nin">
                NIN
              </label>
              <input
                id="nin"
                type="text"
                inputMode="numeric"
                maxLength={11}
                placeholder="NIN"
                className="vf-input"
                value={nin}
                onChange={(e) => setNin(e.target.value)}
              />
            </div>
            <p className="vf-nin-hint">
              Providing your NIN speeds up account matching across more institutions.
            </p>

            {/* Consent checkbox */}
            <div className="vf-consent">
              <input
                id="consent"
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <label htmlFor="consent" className="vf-consent-text">
                I authorise PocketSync to use my BVN to look up my linked bank
                accounts via NIBSS-licensed APIs, in accordance with the{" "}
                <a href="#">CBN Open Banking Policy</a>.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="vf-submit-btn"
              disabled={!isValid}
            >
              Verify
            </button>

          </form>
        </div>

        {showBvnInfo && (
        <div className="bvn-backdrop" onClick={() => setShowBvnInfo(false)}>
          <div className="bvn-modal" onClick={(e) => e.stopPropagation()}>
            <h3 className="bvn-modal-title">Bank Verification Number</h3>
            <p className="bvn-modal-text">
              The Bank Verification Number (BVN) project is an initiative
              aimed at protecting bank customers and further strengthening
              the Nigerian banking system. The Bank introduced BVN to all
              banks' customers to address the absence of unique identifier
              across the Nigerian Banking Industry. The BVN is a number
              that enables a bank customer to have a single identity in the
              banking system. The full implementation was expected to
              enhance the effectiveness of KYC requirement, the safety and
              reliability of the payments system.
            </p>
            <p className="bvn-modal-source">
              Source: <span className="bvn-modal-link">CBN</span>
            </p>
            <button
              className="bvn-modal-close"
              onClick={() => setShowBvnInfo(false)}
            >
              Close
            </button>
          </div>
        </div>
        )}
            </div>

    </div>
  );
}
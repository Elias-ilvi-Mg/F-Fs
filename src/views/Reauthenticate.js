import React, { useState, useEffect } from 'react';
import './reauthenticate.css'

function Reauthenticate({ onReauthenticate, sessionTimeout = 1 * 60 * 1000 }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Set a timer to show the reauthentication modal after the session timeout
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, sessionTimeout);

    return () => clearTimeout(timer); // Cleanup timer when the component unmounts
  }, [sessionTimeout]);

  const handleReauthenticate = () => {
    setIsModalOpen(false);
    if (onReauthenticate) onReauthenticate();
  };

  const handleSignOut = () => {
    setIsModalOpen(false);
    // Redirect user to login or homepage
    window.location.href = '/login';
  };

  return (
    <>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <div className="modal-container-details">
            <span>X</span>
            </div>
            <h2>Welcome Back</h2>
            <p>
              Please sign in again to access your account information. Your
              session has expired.
            </p>
            <button className="btn btn-primary" onClick={handleReauthenticate}>
              Sign In
            </button>
            <button className="btn btn-secondary" onClick={handleSignOut}>
              Sign Out
            </button>
            
          </div>
        </div>
      )}
    </>
  );
}

export default Reauthenticate;

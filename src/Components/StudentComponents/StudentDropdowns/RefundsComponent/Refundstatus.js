import React from 'react';
import './Refundstatus.css'; // Import the CSS file

const Refundstatus = () => {
  return (
    <div className="refund-status-container">
      <span className="refund-status-label">Pending:</span>
      <span className="refund-status-value">0</span>
    </div>
  );
}

export default Refundstatus;
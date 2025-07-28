import React from 'react';
import './Pocketmoneystatus.css'; // Import the CSS file

const Pocketmoneystatus = ({ amount = 800, label = "Balance" }) => {
  // Calculate the percentage based on the amount itself (no maxAmount)
  const barPercentage = (amount / 1000) * 100; // Assuming 1000 is the total for the bar

  return (
    <div className="pocket-money-status-container">
      <div className="pocket-money-status-header">
        <span className="pocket-money-status-label">
          {label}
        </span>
        <span className="pocket-money-status-amount">
          {amount.toLocaleString()}
        </span>
      </div>

      <div className="pocket-money-status-bar">
        <div
          className="pocket-money-status-bar-segment"
          style={{ width: `${barPercentage}%`, backgroundColor: "#E53935" }} // Red color
        />
      </div>
    </div>
  );
};

export default Pocketmoneystatus;

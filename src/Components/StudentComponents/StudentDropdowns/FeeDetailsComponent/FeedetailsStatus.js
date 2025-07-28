import React from "react";
import "./FeedetailsStatus.css";

const FeedetailsStatus = ({ currentTerm = 1, amount = 10000, label = "Term" }) => {
  const getColor = (index) => {
    if (index + 1 < currentTerm) return "#4CAF50"; // completed → green
    if (index + 1 === currentTerm) return "#E53935"; // active → red
    return "#D9D9D9"; // upcoming → gray
  };

  return (
    <div className="fee-details-status-container">
      <div className="fee-details-status-header">
        <span className="fee-details-status-label">
          {label} {currentTerm}
        </span>
        <span className="fee-details-status-amount">
          {amount.toLocaleString()}
        </span>
      </div>

      <div className="fee-details-status-bar">
        {[0, 1, 2].map((_, index) => (
          <div
            key={index}
            className="fee-details-status-bar-segment"
            style={{
              backgroundColor: getColor(index),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedetailsStatus;

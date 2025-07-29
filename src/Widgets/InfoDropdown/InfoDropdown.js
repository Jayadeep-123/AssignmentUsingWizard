import React from "react";
import "./InfoDropdown.css";
import downarrowicon from "../../assets/downicon";
import uparrowicon from "../../assets/uparrowicon";

const InfoDropdown = ({
  label,
  isDropdownOpen,
  onToggle,
  icon = null,
  variant,
  label1,
  label2,
  status: StatusComponent,
}) => {
  return (
    <div onClick={onToggle} className={`dropdown ${variant}_dropdown`}>
      <div className={`dropdown_parent ${variant}`}>
        <div className="dropdown_icon_name">
          {icon}
          <p className="dropdown_label">{label}</p>
        </div>
        <div className={`dropdown_right_side ${variant}_right_side`}>
          <div className="student_status">
            {/* Render the status component if it is provided */}
            {StatusComponent && <StatusComponent />}
          </div>
          <div className="arrow">
            {isDropdownOpen ? uparrowicon : downarrowicon}
          </div>
        </div>
      </div>
      {!isDropdownOpen && (
        <div className="dropdown_labels">
          <p className="label1">{label1}</p>
          <p className="label2">{label2}</p>
        </div>
      )}
    </div>
  );
};

export default InfoDropdown;

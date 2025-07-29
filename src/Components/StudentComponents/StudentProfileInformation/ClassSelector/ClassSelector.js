import { useState } from 'react';
import "./ClassSelector.css";

const ClassSelector = ({ activeClass, setActiveClass }) => {
  const topClasses = ["Class 9", "Class 8", "Class 7"];
  const moreClasses = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 10", "Inter 1", "Inter 2"
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="student_dropdown_top_right">
      {topClasses.map((cls) => (
        <button
          key={cls}
          className={`class-button ${activeClass === cls ? 'active' : ''}`}
          onClick={() => setActiveClass(cls)}
        >
          {cls}
        </button>
      ))}
      <div className="more-container">
        <button className="more-button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          More
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.00019 1.13076L4.1583 3.97266L1.31641 1.13076" stroke="#616161" stroke-width="1.13676" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 
        </button>
        {isDropdownOpen && (
          <div className="classdropdown">
            {moreClasses.map((cls) => (
              <button
                key={cls}
                className={`class-button ${activeClass === cls ? 'active' : ''}`}
                onClick={() => {
                  setActiveClass(cls);
                  setIsDropdownOpen(false);
                }}
              >
                {cls}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ClassSelector;
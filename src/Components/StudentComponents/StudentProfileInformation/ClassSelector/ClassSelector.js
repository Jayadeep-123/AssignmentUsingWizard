import { Dropdown } from "react-bootstrap";
import styles from '../studentInformation/Studentinformation.module.css';

const ClassSelector = ({ activeClass, setActiveClass }) => {
  const topClasses = ["Class 9", "Class 8", "Class 7"];
  const moreClasses = [
    "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 10", "Inter 1", "Inter 2"
  ];
  const isInTop = topClasses.includes(activeClass);

  return (
    <div className={styles.classSelectorContainer}>
      {topClasses.map(cls => (
        <button
          key={cls}
          onClick={() => setActiveClass(cls)}
          className={`${styles.classButton} ${activeClass === cls ? styles.active : ''}`}
        >
          {cls}
        </button>
      ))}

      <Dropdown>
        <Dropdown.Toggle
          className={`${styles.customToggle} ${!isInTop ? styles.active : ''}`}
        >
          <span>{isInTop ? "More" : activeClass}</span>
          <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00019 1.13076L4.1583 3.97266L1.31641 1.13076" stroke={isInTop ? "#616161" : "#fff"} strokeWidth="1.13676" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {moreClasses.map(cls => (
            <Dropdown.Item
              key={cls}
              onClick={() => setActiveClass(cls)}
              active={activeClass === cls}
            >
              {cls}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default ClassSelector;

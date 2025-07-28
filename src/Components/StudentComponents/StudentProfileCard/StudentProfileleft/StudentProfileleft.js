import React from "react";
import styles from "./StudentProfileleft.module.css";

const StudentProfileLeft = ({ studentId, data }) => {
  return (
    <div className={styles.studentProfileBasics}>
      {/* Admin No */}
      <p className={styles.studentAdminNo}>
        Admin No: <strong className={styles.studentAdminId}>HYD {studentId || "N/A"}</strong>
      </p>

      {/* Name */}
      <h2 className={styles.studentName}>{data.studentName || "N/A"}</h2>

      {/* Gender & Category */}
      <div className={styles.studentInfoLine}>
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
          <path d="M13 2V6.5H11.5V4.56875L8.51875 7.53125C8.75625 7.88125 8.9375 8.25325 9.0625 8.64725C9.1875 9.04125 9.25 9.4505 9.25 9.875C9.25 11.025 8.85 12 8.05 12.8C7.25 13.6 6.275 14 5.125 14C3.975 14 3 13.6 2.2 12.8C1.4 12 1 11.025 1 9.875C1 8.725 1.4 7.75 2.2 6.95C3 6.15 3.975 5.75 5.125 5.75C5.5375 5.75 5.94375 5.80925 6.34375 5.92775C6.74375 6.04625 7.1125 6.23075 7.45 6.48125L10.4313 3.5H8.5V2H13ZM5.125 7.25C4.4 7.25 3.78125 7.50625 3.26875 8.01875C2.75625 8.53125 2.5 9.15 2.5 9.875C2.5 10.6 2.75625 11.2188 3.26875 11.7313C3.78125 12.2438 4.4 12.5 5.125 12.5C5.85 12.5 6.46875 12.2438 6.98125 11.7313C7.49375 11.2188 7.75 10.6 7.75 9.875C7.75 9.15 7.49375 8.53125 6.98125 8.01875C6.46875 7.50625 5.85 7.25 5.125 7.25Z" fill="#5558FF" />
        </svg>
        <span>{data.gender || "N/A"}</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
            <circle cx="2" cy="2" r="2" fill="#D9D9D9" />
          </svg>
        </span>
        <span>General</span>
      </div>

      {/* Tags */}
      <div className={styles.studentTags}>
        <span className={styles.studentTagBlue}>Class 8</span>
        <span className={styles.studentTagGreen}>Techno</span>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
            <path d="M0 4C0 1.79086 1.79086 0 4 0H24C26.2091 0 28 1.79086 28 4V19C28 21.2091 26.2091 23 24 23H4C1.79086 23 0 21.2091 0 19V4Z" fill="white" />
            <path d="M4 0.5H24C25.933 0.5 27.5 2.067 27.5 4V19C27.5 20.933 25.933 22.5 24 22.5H4C2.067 22.5 0.5 20.933 0.5 19V4C0.5 2.067 2.067 0.5 4 0.5Z" stroke="black" strokeOpacity="0.05" />
            <path d="M9.75 12C9.75 12.9665 8.9665 13.75 8 13.75C7.0335 13.75 6.25 12.9665 6.25 12C6.25 11.0335 7.0335 10.25 8 10.25C8.9665 10.25 9.75 11.0335 9.75 12ZM15.75 12C15.75 12.9665 14.9665 13.75 14 13.75C13.0335 13.75 12.25 12.9665 12.25 12C12.25 11.0335 13.0335 10.25 14 10.25C14.9665 10.25 15.75 11.0335 15.75 12ZM20 13.75C20.9665 13.75 21.75 12.9665 21.75 12C21.75 11.0335 20.9665 10.25 20 10.25C19.0335 10.25 18.25 11.0335 18.25 12C18.25 12.9665 19.0335 13.75 20 13.75Z" fill="#616161" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default StudentProfileLeft;

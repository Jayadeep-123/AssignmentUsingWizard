import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./StudentNavTabs.module.css";

const tabs = [
  { label: "Student Profile", path: "/student/:1" },
  { label: "Payments", path: "/student/payments" },
  { label: "Transport", path: "/transport" },
  { label: "Academics", path: "/academics" },
  { label: "Alerts", path: "/alerts" },
  { label: "History", path: "/history" },
  { label: "Room Allotment", path: "/room-allotment" },
  { label: "Issue Forms", path: "/issue-forms" },
  { label: "Certificates", path: "/certificates" },
];

const StudentNavTabs = () => (
  <nav className={styles.studentTabs}>
    <div className={styles.navTabLinks}>
      {tabs.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          end
          className={({ isActive }) =>
            `${styles.tabLink} ${isActive ? styles.active : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </div>
  </nav>
);

export default StudentNavTabs;

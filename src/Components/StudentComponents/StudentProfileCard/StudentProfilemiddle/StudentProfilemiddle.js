import React from "react";
import StudentProfileImage from "../../StudentProfileImage/StudentProfileImg";
import StudentProfileLeft from "../../StudentProfileCard/StudentProfileleft/StudentProfileleft";
import ViewProfileButton from "../../../../Widgets/button/ViewProfileButton/ViewProfileButton";
import StudentNavTabs from "../../StudentSubNavTabs/StudentNavTabs";
import heroBackground from "../../../../assets/BackgroundsImages/Hero-block.png";
import styles from "./StudentProfilemiddle.module.css";

const StudentProfilemiddle = ({ studentId, data }) => {
  return (
    <div
      className={styles.studentProfileTopbarWrapper}
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "100% 100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.studentProfileTopbar}>
        {/* Left Section */}
        <div className={styles.studentProfileLeft}>
          <StudentProfileImage gender={data.gender} />
          <StudentProfileLeft studentId={studentId} data={data} />
        </div>

        {/* Middle Info */}
        <div className={styles.studentProfileMiddle}>
          <div className={styles.student_profile_card_middle_data}>
          <InfoItem label="Course Track / Orientation" value={data.course_track} />
          <InfoItem label="Admission Type" value={data.admission_type} />
          </div>
          <div className={styles.student_profile_card_middle_data}>
          <InfoItem label="Admission Status" value={data.admission_status} />
          <InfoItem label="Student Type" value={data.student_type} />
          </div>
          <div className={styles.student_profile_card_section}>
              <InfoItem label="Section" value={data.section} />
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.studentProfileRight}>
          <ViewProfileButton />
        </div>
      </div>

      {/* Tabs Below */}
      <div className={styles.studentProfileTabs}>
        <StudentNavTabs />
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }) => (
  <div className={styles.infoItem}>
    <p className={styles.label}>{label}</p>
    <p className={styles.value}>{value || "N/A"}</p>
  </div>
);

export default StudentProfilemiddle;

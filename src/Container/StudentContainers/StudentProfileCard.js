import React from "react";
import StudentProfilemiddle from "../../Components/StudentComponents/StudentProfileCard/StudentProfilemiddle/StudentProfilemiddle";

import "./StudentProfileCard.css";
import StudentLayout from "../../Components/StudentComponents/Layout/StudentLayout";

const dummyStudentData = {
  studentName: "Devansh.N",
  gender: "Male",
  course_track: "Class 8 with Techno",
  admission_type: "Direct Walkin",
  admission_status: "Current",
  student_type: "Residential",
  section: "8A",
};

const StudentProfileContainer = () => {
  const studentId = 253487918;

  return (
    <div className="StudentProfileMainWrapper">
      <div className="StudentProfileContainer">
        <div className="studentLefttopection">
          <div className="card">
            <StudentProfilemiddle studentId={studentId} data={dummyStudentData} />
          </div>
          {/* Render StudentLayout here */}
          <StudentLayout />
        </div>
      </div>
    </div>
  );
};

export default StudentProfileContainer;

import { useState } from "react";
import './Studentinformation.css';
import informationicon from "../../../../assets/informationicon";
import ClassSelector from "../ClassSelector/ClassSelector"

const StudentInformation = () => {
  const [activeClass, setActiveClass] = useState("Class 8");

  return (
    <div className="student_information_top">
      <div className="student_module_icon_heading">
         {informationicon}
        <div className="student_dropdown_top_heading">
          <h3>Student Information</h3>
          <p>Get All Students details regarding fee payment and more...</p>
        </div>
      </div>
      <div className="student_class_selection">
          <ClassSelector activeClass={activeClass} setActiveClass={setActiveClass} />
      </div>
    </div>
  );
};

export default StudentInformation;
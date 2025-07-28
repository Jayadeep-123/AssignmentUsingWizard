import Personaldetailsdropdown from "./StudentComponents/ProfileDetailsComponent/Profiledetailsdropdown"
import Campusdetailsdropdown from "./StudentComponents/CampusDetailsComponent/Campusdetailsdropdown"
import Additonaldetailsdropdown from "./StudentComponents/AdditionalDetailsComponent/Additionaldetailsdropdown"
import infoicon from "../assets/infoicon"
import "./StudentPersonalInfo.css"
import { useState } from "react"

const StudentPersonalInfo = () =>{

     const [openSection, setOpenSection] = useState({
        personal: false,campus: false,additional: false
      });
    
      const toggleContent = (section) => {
        setOpenSection((prev) => ({ personal: false,campus: false,additional: false, [section]: !prev[section], }));
      };

    return(
        <div>
        <div className="student_personalinfo_heading">
            {infoicon}<p>Information</p>
        </div>
        <div className="student_personalinfo_content">
           <Personaldetailsdropdown isOpen= {openSection.personal} onToggle={()=>toggleContent("personal")}/>
           <Campusdetailsdropdown isOpen= {openSection.campus} onToggle={()=>toggleContent("campus")}/>
           <Additonaldetailsdropdown isOpen= {openSection.additional} onToggle={()=>toggleContent("additional")}/>
        </div>
        </div>
    )
}

export default StudentPersonalInfo;
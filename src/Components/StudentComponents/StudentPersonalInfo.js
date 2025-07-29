import Profiledetailsdropdown from "../../Components/StudentComponents/StudentDropdowns/ProfileDetailsComponent/Profiledetailsdropdown"
import Campusdetailsdropdown from "../../Components/StudentComponents/StudentDropdowns/CampusDetailsComponent/Campusdetailsdropdown"
import Additonaldetailsdropdown from "../../Components/StudentComponents/StudentDropdowns/AdditionalDetailsComponent/Additionaldetailsdropdown"
import infoicon from "../../assets/infoicon"
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
           <Profiledetailsdropdown isOpen= {openSection.personal} onToggle={()=>toggleContent("personal")}/>
           <Campusdetailsdropdown isOpen= {openSection.campus} onToggle={()=>toggleContent("campus")}/>
           <Additonaldetailsdropdown isOpen= {openSection.additional} onToggle={()=>toggleContent("additional")}/>
        </div>
        </div>
    )
}

export default StudentPersonalInfo;
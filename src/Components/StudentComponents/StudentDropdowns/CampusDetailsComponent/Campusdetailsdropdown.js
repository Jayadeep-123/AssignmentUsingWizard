
import documenticon from "../../../../assets/documenticon"
import DropdownInformation from "../../../../Widgets/DropdownsInformation/DropdownInformation";
import InfoDropdown from "../../../../Widgets/InfoDropdown/InfoDropdown";
import "./Campusdetailsdropdown.css"

const Campusdetailsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="campusdetailsdropdown">
        <InfoDropdown label="Campus Details" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={documenticon} variant="" label1="Current Campus" label2="Course"/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="student_campus_course">
             <DropdownInformation heading = "Current Campus" value="Madhapur"/>
             <DropdownInformation heading = "Course" value="MPC" side="right"/>
            </div>
        </div>}
       </div>
    )
}

export default Campusdetailsdropdown;
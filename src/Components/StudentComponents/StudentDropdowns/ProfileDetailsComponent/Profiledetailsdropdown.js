
import DropdownInformation from "../../../../Widgets/DropdownsInformation/DropdownInformation";
import InfoDropdown from "../../../../Widgets/InfoDropdown/InfoDropdown";
import documenticon from "../../../../assets/documenticon"
import "./profiledetailsdropdown.css"

const Profiledetailsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="profiledetailsdropdown">
        <InfoDropdown label="Profile Details" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={documenticon} variant="" label1="Father Name" label2="Mother Name"/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="student_aadhar_mother">
             <DropdownInformation heading = "Aadhar number" value="1234 4567 8931"/>
             <DropdownInformation heading = "Mother name" value="Radha Rani Bhimineni" side="right"/>
            </div>
           <div className="student_dob_father">
             <DropdownInformation heading = "Date Of birth" value="28 Dec 1997"/>
             <DropdownInformation heading = "Father name" value="Giridhar Bhimineni" side="right"/>
           </div>
           <div>
            <DropdownInformation heading = "Address" value="6th Floor, NCC Building, Durgamma Cheruvu Road, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081"/>
           </div>
        </div>}
       </div>
    )
}

export default Profiledetailsdropdown;
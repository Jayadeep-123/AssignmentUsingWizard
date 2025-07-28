import InfoDropdown from "../../../Widgets/InfoDropdowns/InfoDropdown"
import DropdownInformation from "../../../Widgets/DropdownsInformation/DropdownInformation"
import fileicon from "../../../assets/fileicon"
import "./Feedetailsdropdown.css"
import FeedetailsStatus from "./FeedetailsStatus"

const Feedetailsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="feedetailsdropdown">
       <InfoDropdown label="Fee Details" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={fileicon} variant="student_main" status={FeedetailsStatus}/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="dropdown_content_left">
                <DropdownInformation heading = "Course Fee" value="145,000" variant="student_main_content"/>
                <DropdownInformation heading = "Add'I Amount" value="2500" variant="student_main_content"/>
                <DropdownInformation heading = "Concession" value="40,000" variant="student_main_content"/>
                <DropdownInformation heading = "Service Tax Paid" value="0" variant="student_main_content"/>
            </div>
            <div className="dropdown_content_right">
                <DropdownInformation heading = "Fee Paid" value="122,500" variant="student_main_content"/>
                <DropdownInformation heading = "Fee Deduction" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Over All Due" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Service tax to be Paid" value="0" variant="student_main_content"/>
            </div>    
        </div>}
       </div>
    )
}

export default Feedetailsdropdown;
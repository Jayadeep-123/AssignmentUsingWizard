import "./Refundsdropdown.css"

import fileicon from "../../../../assets/fileicon"
import Refundstatus from "./Refundstatus"
import InfoDropdown from "../../../../Widgets/InfoDropdown/InfoDropdown"
import DropdownInformation from "../../../../Widgets/DropdownsInformation/DropdownInformation"

const Refundsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="refundsdropdown">
         <InfoDropdown label="Refunds" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={fileicon} variant="student_main" status={Refundstatus}/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="dropdown_content_left">
                <DropdownInformation heading = "Akash Books" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Bus Pass" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Caution Deposit" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Material" value="0" variant="student_main_content"/>
            </div>
        </div>   
        }
       </div>
    )
}

export default Refundsdropdown;
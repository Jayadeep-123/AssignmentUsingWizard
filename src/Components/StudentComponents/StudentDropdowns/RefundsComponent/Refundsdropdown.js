import "./Refundsdropdown.css"
import InfoDropdown from "../../../Widgets/InfoDropdowns/InfoDropdown"
import DropdownInformation from "../../../Widgets/DropdownsInformation/DropdownInformation"
import fileicon from "../../../assets/fileicon"
import Refundstatus from "./Refundstatus"

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
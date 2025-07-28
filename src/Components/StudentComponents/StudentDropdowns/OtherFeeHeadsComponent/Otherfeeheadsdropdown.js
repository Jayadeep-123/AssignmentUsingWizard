import "./Otherfeeheadsdropdown.css"
import InfoDropdown from "../../../Widgets/InfoDropdowns/InfoDropdown"
import DropdownInformation from "../../../Widgets/DropdownsInformation/DropdownInformation"
import fileicon from "../../../assets/fileicon"
import Otherfeeheadstatus from "./Otherfeeheadstatus"

const Otherfeeheadsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="feedetailsdropdown">
       <InfoDropdown label="Other Fee Heads" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={fileicon} variant="student_main" status={Otherfeeheadstatus}/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="dropdown_content_left">
                <DropdownInformation heading = "Akash Books" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Bus Pass" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Caution Deposit" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "CRD Books" value="0" variant="student_main_content"/>
            </div>
            <div className="dropdown_content_right">
                <DropdownInformation heading = "Miscellaneous" value="15,000" variant="student_main_content"/>
                <DropdownInformation heading = "STD Welfare Fund" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Material" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "EAMCET App Fee" value="0" variant="student_main_content"/>
            </div>    
        </div>}
       </div>
    )
}

export default Otherfeeheadsdropdown;
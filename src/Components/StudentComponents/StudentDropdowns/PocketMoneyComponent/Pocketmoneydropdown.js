
import DropdownInformation from "../../../../Widgets/DropdownsInformation/DropdownInformation"
import InfoDropdown from "../../../../Widgets/InfoDropdown/InfoDropdown"
import fileicon from "../../../../assets/fileicon"
import "./Pocketmoneydropdown.css"
import Pocketmoneystatus from "./Pocketmoneystatus"
import Pocketmoneyright from "./Pocketmoneyright"
// import pocketmoneyicon from "../../assets/pocketmoneyicon"

const Pocketmoneydropdown  = ({isOpen, onToggle}) =>{
    return (
       <div  className="pocketmoneydropdown">
        <InfoDropdown label="Pocket Money" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={fileicon} variant="student_main" status={Pocketmoneystatus}/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="dropdown_content_left">
                <DropdownInformation heading = "Pocket Refund" value="0" variant="student_main_content"/>
                <DropdownInformation heading = "Deposited Amount" value="7000" variant="student_main_content"/>
                <DropdownInformation heading = "Taken Amount" value="5,492" variant="student_main_content"/>
            </div>
            <div className="dropdown_content_right">
                 <Pocketmoneyright/>
            </div>
        </div>
        }
       </div>
    )
}

export default Pocketmoneydropdown;
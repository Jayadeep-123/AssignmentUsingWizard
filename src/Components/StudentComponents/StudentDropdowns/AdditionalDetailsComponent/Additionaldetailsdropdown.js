
import DropdownInformation from "../../../../Widgets/DropdownsInformation/DropdownInformation";
import InfoDropdown from "../../../../Widgets/InfoDropdown/InfoDropdown";
import documenticon from "../../../../assets/documenticon"
import "./Additionaldetailsdropdown.css"

const Additonaldetailsdropdown = ({isOpen, onToggle}) =>{
    return(
       <div className="additionaldetailsdropdown">
        <InfoDropdown label="Additional Details" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={documenticon} variant="" label1="Language" label2="Sports"/>
        {isOpen && 
        <div className="dropdown_content">
            <div className="student_language_sports">
             <DropdownInformation heading = "Language" value="Telugu"/>
             <DropdownInformation heading = "Sports" value="CRICKET" side="right"/>
            </div>
        </div>}
       </div>
    )
}

export default Additonaldetailsdropdown;
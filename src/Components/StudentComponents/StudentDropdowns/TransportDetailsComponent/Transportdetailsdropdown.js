import TranspostDetailsInformation from "./TransportDetailsInformation";
import calendericon from "../../../assets/calendericon";
import InfoDropdown from "../../../Widgets/InfoDropdowns/InfoDropdown";
import fileicon from "../../../assets/fileicon";
import transporttype from "../../../assets/transporttype";
import transportstatus from "../../../assets/transportstatus"
import boardingstage from "../../../assets/boardingstage";
import Map from "../../../assets/Map.png"
import "./Transportdetailsdropdown.css"
import Transportdetailsstatus from "./Transportdetailsstatus";

const Transportdetailsdropdown = ({isOpen, onToggle}) =>{
    return(
    <div className="transportdetailsdropdown">
    <InfoDropdown label="Transport Details" isDropdownOpen={isOpen} onToggle={onToggle}
        icon={fileicon} variant="student_main" status={Transportdetailsstatus}/>
    {isOpen && 
    <div className="dropdown_content">
      <div className="dropdown_left_content">
        <TranspostDetailsInformation icon={calendericon} label="Academic Year" value="2014-2015"/>
        <TranspostDetailsInformation icon={transporttype} label="Transport Type" value="BHEL - Miyapur"/>
        <TranspostDetailsInformation icon={transportstatus} label="Trasport Status" value="Assigned"/>
        <TranspostDetailsInformation icon={boardingstage} label="Boarding Stage" value="BHEL"/>     
      </div>
      <div className="dropdown_right_content">
        <img className="map" src={Map} alt="map"/>
      </div>
    </div>
    }
    </div>
    )
}

export default Transportdetailsdropdown;
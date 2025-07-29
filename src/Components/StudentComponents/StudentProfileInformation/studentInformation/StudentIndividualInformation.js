import Feedetailsdropdown from "../../StudentDropdowns/FeeDetailsComponent/Feedetailsdropdown"
import Pocketmoneydropdown from "../../StudentDropdowns/PocketMoneyComponent/Pocketmoneydropdown"
import Transportdetailsdropdown from "../../StudentDropdowns/TransportDetailsComponent/Transportdetailsdropdown"
import Refundsdropdown from "../../StudentDropdowns/RefundsComponent/Refundsdropdown"
import Otherfeeheadsdropdown from "../../StudentDropdowns/OtherFeeHeadsComponent/Otherfeeheadsdropdown"
import { useState } from "react"
import "./StudentInfo.css"

const StudentIndivualInformation = () =>{
    const [openSection, setOpenSection] = useState({
    fee: false,
    pocketmoney: false,
    transport: false,
    refund:false,
    otherfeeheads:false,
  });

  const toggleContent = (section) => {
    setOpenSection((prev) => ({
      fee: false,
    pocketmoney: false,
    transport: false,
    refund: false,
    otherfeeheads: false,
      [section]: !prev[section],
    }));
  };
    return(
        <div className="student_information_dropdowns">
        <Feedetailsdropdown isOpen= {openSection.fee} onToggle={()=>toggleContent("fee")}/>
        <Pocketmoneydropdown isOpen= {openSection.pocketmoney} onToggle={()=>toggleContent("pocketmoney")}/>
        <Transportdetailsdropdown isOpen= {openSection.transport} onToggle={()=>toggleContent("transport")}/>
        <Refundsdropdown isOpen= {openSection.refund} onToggle={()=>toggleContent("refund")}/>
        <Otherfeeheadsdropdown isOpen= {openSection.otherfeeheads} onToggle={()=>toggleContent("otherfeeheads")}/>
        </div>
    )
}

export default StudentIndivualInformation;
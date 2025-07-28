import Feedetailsdropdown from "./StudentComponents/FeeDetailsComponent/Feedetailsdropdown"
import Pocketmoneydropdown from "./StudentComponents/PocketMoneyComponent/Pocketmoneydropdown"
import Transportdetailsdropdown from "./StudentComponents/TransportDetailsComponent/Transportdetailsdropdown"
import Refundsdropdown from "./StudentComponents/RefundsComponent/Refundsdropdown"
import Otherfeeheadsdropdown from "./StudentComponents/OtherFeeHeadsComponent/Otherfeeheadsdropdown"
import { useState } from "react"
import "./StudentInfo.css"

const StudentInformation = () =>{
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
        <div>
        <Feedetailsdropdown isOpen= {openSection.fee} onToggle={()=>toggleContent("fee")}/>
        <Pocketmoneydropdown isOpen= {openSection.pocketmoney} onToggle={()=>toggleContent("pocketmoney")}/>
        <Transportdetailsdropdown isOpen= {openSection.transport} onToggle={()=>toggleContent("transport")}/>
        <Refundsdropdown isOpen= {openSection.refund} onToggle={()=>toggleContent("refund")}/>
        <Otherfeeheadsdropdown isOpen= {openSection.otherfeeheads} onToggle={()=>toggleContent("otherfeeheads")}/>
        </div>
    )
}

export default StudentInformation;
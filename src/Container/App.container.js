import Application from "../Components/SidebarComponents/Application/Application";
import AssetsManageMent from "../Components/SidebarComponents/AssetsManageMent/AssetsMangement";
import CCTV from "../Components/SidebarComponents/CCTV/CCTV";
import Employee from "../Components/SidebarComponents/Employee/Employee";
import Fleet from "../Components/SidebarComponents/Fleet/Fleet";
import Hrms from "../Components/SidebarComponents/Hrms/Hrms";
import PaymentService from "../Components/SidebarComponents/PaymentService/PaymentService";
import Questionbank from "../Components/SidebarComponents/QuestionBank/Questionbank";
import Sms from "../Components/SidebarComponents/Sms/Sms";
import Student from "../Components/SidebarComponents/Students/Students";
import WareHouse from "../Components/SidebarComponents/WareHouse/WareHouse";
import Styles from './AppContainer.module.css'


const Appcontainer = () =>{
    return(

       <aside className={Styles.AppContainer}>
        <Student/>
        <Application/>
        <Employee/>
        <Fleet/>
        <WareHouse/>
        <Sms/>
        <Questionbank/>
        <AssetsManageMent/>
        <PaymentService/>
        <CCTV/>
        <Hrms/>
       </aside> 
        

    )
}
export default Appcontainer;
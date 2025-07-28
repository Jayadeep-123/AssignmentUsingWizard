import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Application from "../../Components/SidebarComponents/Application/Application";
import AssetsManageMent from "../../Components/SidebarComponents/AssetsManageMent/AssetsMangement";
import CCTV from "../../Components/SidebarComponents/CCTV/CCTV";
import Employee from "../../Components/SidebarComponents/Employee/Employee";
import Fleet from "../../Components/SidebarComponents/Fleet/Fleet";
import Hrms from "../../Components/SidebarComponents/Hrms/Hrms";
import PaymentService from "../../Components/SidebarComponents/PaymentService/PaymentService";
import Questionbank from "../../Components/SidebarComponents/QuestionBank/Questionbank";
import Sms from "../../Components/SidebarComponents/Sms/Sms";
import Student from "../../Components/SidebarComponents/Students/Students";
import WareHouse from "../../Components/SidebarComponents/WareHouse/WareHouse";
import Styles from './AppContainer.module.css';
import StudentSearch from '../studentSearchContainer/studentSearchcontainer';
import StudentProfileContainer from '../StudentContainers/StudentProfileCard';

const Appcontainer = () => {
  return (
    <Router>
      <aside className={Styles.AppContainer}>
        <div className={Styles.sidebarWrapper}>
          <Link to="/student" className={Styles.link}><Student/></Link>
          <Link to="/application" className={Styles.link}><Application /></Link>
          <Link to="/employee" className={Styles.link}><Employee /></Link>
          <Link to="/fleet" className={Styles.link}><Fleet /></Link>
          <Link to="/warehouse" className={Styles.link}><WareHouse /></Link>
          <Link to="/sms"className={Styles.link}><Sms/></Link>
          <Link to="/questionbank" className={Styles.link}> <Questionbank /></Link>
          <Link to="/assets-management" className={Styles.link}><AssetsManageMent /></Link>
          <Link to="/payment-service" className={Styles.link}><PaymentService /></Link>
          <Link to="/cctv" className={Styles.link}><CCTV/></Link>
          <Link to="/hrms" className={Styles.link}><Hrms/></Link>
        </div>
      </aside>

      <div className={Styles.contentWrapper}>
        <Routes>
          <Route path="/"/>
          <Route path="/student" element={<StudentSearch />} />
          <Route path='/student/:id' element={<StudentProfileContainer/>}/>
          {/* <Route path="/application" element={<Application />} />
          <Route path="/employee" element={<Employee />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/warehouse" element={<WareHouse />} />
          <Route path="/sms" element={<Sms />} />
          <Route path="/questionbank" element={<Questionbank />} />
          <Route path="/assets-management" element={<AssetsManageMent />} />
          <Route path="/payment-service" element={<PaymentService />} />
          <Route path="/cctv" element={<CCTV />} />
          <Route path="/hrms" element={<Hrms />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Appcontainer;

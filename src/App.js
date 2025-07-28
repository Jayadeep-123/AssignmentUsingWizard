import './App.css';
import Header from './Container/HeaderMainContainer/Header';
import Appcontainer from './Container/sidebarContainer/App.container';

// import StudentSearch from './Container/studentSearchContainer/studentSearchcontainer';


function App() {
  return (
      <>
        <Header />
        <div className='main-content'>
          <Appcontainer />
          {/* <StudentSearch /> */}
        </div>

    </>
  );
}

export default App;

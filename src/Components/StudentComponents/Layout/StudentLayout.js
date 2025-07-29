import React from 'react';
import '../Layout/StudentLayout.css';
import StudentInformation from '../StudentProfileInformation/studentInformation/StudentInformation';
import StudentIndivualInformation from '../StudentProfileInformation/studentInformation/StudentIndividualInformation';
import StudentPersonalInfo from '../StudentPersonalInfo';

const StudentLayout = () => {
  return (

    <div className='StudentLayout'>
      <div className='LayoutLeftSecrtion'>
        <div>
          <StudentInformation />
        </div>
        <div>
          <StudentIndivualInformation />
        </div>
      </div>
      <div className='LayoutRightSection'>
        <StudentPersonalInfo />
      </div>
      </div>
  
  );
};

export default StudentLayout;

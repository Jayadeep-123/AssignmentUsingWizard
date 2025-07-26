// RecentStudentList.jsx
import React, { useEffect, useState } from 'react';
import StudentCard from '../../Widgets/card/Card';
import { Typography } from '@mui/material';
import profile from '../../assets/Frame 1171277284 (1).png'
import lineImg from '../../assets/lineImg.png';

const students = [
  {
    id: '246189267',
    name: 'Devansh N',
    fatherName: 'Lokesh',
    image: profile,
    currentClass:'Inter',
    styleImg:lineImg
  },
  {
    id: '246189268',
    name: 'Harika R',
    fatherName: 'Narasimha',
    image:profile,
     currentClass:'Inter',
      styleImg:lineImg
  },
  {
    id: '246189269',
    name: 'Kiran M',
    fatherName: 'Ravi',
    image:profile,
     currentClass:'Inter',
      styleImg:lineImg
  },
  {
    id: '246189270',
    name: 'Sneha T',
    fatherName: 'Suresh',
    image:profile,
     currentClass:'Inter',
      styleImg:lineImg

  },
  {
    id: '246189271',
    name: 'Arjun P',
    fatherName: 'Madhav',
    image: profile,
    currentClass:'Inter',
     styleImg:lineImg
    
  },
  {
    id: '246189267',
    name: 'Devansh N',
    fatherName: 'Lokesh',
    image: profile,
    currentClass:'Inter',
    styleImg:lineImg
  },
  {
    id: '246189267',
    name: 'Devansh N',
    fatherName: 'Lokesh',
    image: profile,
    currentClass:'Inter',
    styleImg:lineImg
  },
  
];

const RecentStudentList = () => {
  const [recentStudents, setRecentStudents] = useState(students)

  return (
    <div style={{ width: '100%', padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Search Results
      </Typography>
      <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'flex-start'}}>
      
        {recentStudents.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  )
}

export default RecentStudentList
import React from 'react'
import { Card, CardContent, Avatar, Typography, Box, Chip } from '@mui/material'
import './StudentCard.css'

const StudentCard = ({ student }) => {
  return (
    <Card className="student-card">
      <Avatar
        alt={student.name}src={student.image}className="student-avatar"/>
      <CardContent>
        <p  className="student-id">
          {student.id}
        </p>
        <p className="student-name">
          {student.name}
        </p>
        <p  className="student-father">
          S/o {student.fatherName}
        </p>
        <div>
          <img src={student.styleImg} className="student-image-style" />
        </div>
        <Box className="student-chip-container">
          <Chip label={student.currentClass}color="primary"size="small"className="student-chip"/>
          <Chip label="Current"color="success"size="small"className="student-chip"/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default StudentCard

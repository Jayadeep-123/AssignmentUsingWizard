import React from 'react'
import { Button, Box } from '@mui/material'

const CustomButton = ({ label, onClick, fullWidth = false }) => {
  return (
    <Box display="flex" justifyContent="center">
      <Button
        variant="contained"
        fullWidth={fullWidth}
        onClick={onClick}
        sx={{
          mt: 2,
          backgroundColor: '#3A36DB',
          borderRadius: '6px',
          textTransform: 'none',
          fontWeight: 500,
          justifyContent: 'center',
          '&:hover': {
            backgroundColor: '#2e2ab8',
          }
        }}
      >
        {label}
      </Button>
    </Box>
  )
}

export default CustomButton

import React from 'react'
import { Box, FormControlLabel, Checkbox } from '@mui/material'

const CheckboxGroup = ({ options, selectedOptions, onChange }) => {
  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {options.map((option) => (
        <FormControlLabel
          key={option.value}
          control={
            <Checkbox
              checked={selectedOptions.includes(option.value)}
              onChange={() => onChange(option.value)}
             
               sx={{
                color: selectedOptions.includes(option.value) ? '#3425FF' : 'inherit',
                '&.Mui-checked': {
                  color: '#3425FF',
                }
              }}
            />
          }
          label={option.label}
        />
      ))}
    </Box>
  )
}

export default CheckboxGroup

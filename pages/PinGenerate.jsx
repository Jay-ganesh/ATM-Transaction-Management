import React from 'react'
import { Box, Stack } from '@mui/material'
import './ATM.css';

const PinGenerate = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
    >

    <div>
      
        <Stack spacing={2} minWidth={200}>
        <h2>PIN GENERATED </h2>
        <h2>SUCCESSFUL !!</h2>
        
        
        </Stack>
    </div>
    </Box>
  )
}

export default PinGenerate
import React from 'react'
import { Box, Stack } from '@mui/material'
import './ATM.css';

const Form4 = () => {
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
    >

    <div>
        <Stack spacing={1} minWidth={300}>
        <h1>THANK YOU!</h1>
        
        <h3>VISIT AGAIN!</h3>
        </Stack>
        
    </div>
    </Box>
  )
}

export default Form4
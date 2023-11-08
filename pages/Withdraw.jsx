import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ATM.css';

const Withdraw = () => {
  const [isLogedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/Form3");
  };
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
  >

    <div>
      <Stack spacing={2} minWidth={300}>
        <h1 className=''>WITHDRAW</h1>
      <TextField type='number' label="Enter Amount :"/>
      
      <Button variant='contained' onClick={handleLogin}>Submit</Button>
      </Stack>
    </div>
    </Box>
  )
}

export default Withdraw
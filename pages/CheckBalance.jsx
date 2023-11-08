import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

import './ATM.css';
import { useNavigate } from 'react-router-dom';

const CheckBalance = () => {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/SavingsAccount");
  };
  const [isLogedIn1, setIsLoggedIn1] = useState(false);
  const navigate1 = useNavigate();
  const handleLogin1 = () => {
    setIsLoggedIn1(true);
    navigate1("/currentAccount");
  };
 
    


  
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
  >

    <div>
      <Stack spacing={2} minWidth={100}>
      <h2 className=''>BALANCE ENQUIRY</h2>
    
    
      <Button variant="contained" onClick={handleLogin}>Savings Account</Button>
      <Button variant="contained" onClick={handleLogin1} >Current Account</Button>
      
      </Stack>
    </div>
    </Box>
  )
}

export default CheckBalance
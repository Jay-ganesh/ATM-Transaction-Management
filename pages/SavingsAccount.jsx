import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import './ATM.css';
import { useNavigate } from 'react-router-dom';

function SavingsAccount() {
    const [isLogedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleLogin = () => {
      setIsLoggedIn(true);
      navigate("/Form2");
    };
    const [isLogedIn1,setIsLoggedIn1] = useState(false);
    const navigate1 = useNavigate();
    const handleLogin1 = () => {
      setIsLoggedIn1(true);
      navigate1("/Form4");
    };
  
  

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      minHeight="90vh"
    >

      <div>
        <Stack spacing={2} minWidth="300">
          <h1 className=''>SAVINGS ACCOUNT</h1>
          <p>Your Remaining Balance : 198987</p>
          <Button variant='contained' onClick={handleLogin}>BACK</Button>
          <Button variant='contained' onClick={handleLogin1}>EXIT</Button>
        
        </Stack>
      </div>
    </Box>
  );
};

export default SavingsAccount
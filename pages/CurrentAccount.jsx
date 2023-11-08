import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ATM.css';

function CurrentAccount() {
    const [isLogedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/Form4");
  };
  const [isLogedIn1, setIsLoggedIn1] = useState(false);
  const navigate1 = useNavigate();
  const handleLogin1 = () => {
    setIsLoggedIn1(true);
    navigate1("/Form2");
  };

  

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      minHeight="90vh"
    >

      <div>
        <Stack spacing={2} minWidth="100">
          <h1 className=''>CURRENT ACCOUNT</h1>
          <p>Your Remaining Balance : 5456454</p>
          <Button variant='contained' onClick={handleLogin1}>BACK</Button>
          <Button variant='contained'onClick={handleLogin}>EXIT</Button>
          
        
        </Stack>
      </div>
    </Box>
  );
};

export default CurrentAccount
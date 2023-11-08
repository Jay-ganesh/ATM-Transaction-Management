import { Box, Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ATM.css';

const ChangePin = () => {
  const [isLogedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/PinGenerate");
  };

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
  >

    <div>
      <Stack spacing={0.5} minWidth="xs">
        <h2 className=''>CHANGE PIN</h2>
      <TextField type='number' label="New Pin"/>
      <TextField type='number' label="Re-Enter New Pin" />
      <Button variant='contained'onClick={handleLogin}>Submit</Button>
      </Stack>
    </div>
    </Box>
  )
}

export default ChangePin
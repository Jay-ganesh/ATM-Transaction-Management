import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Form3 = () => {
  const [isLogedOut,setIsLoggedOut] = useState(false);
  const navigate1 = useNavigate();
  const handleLogin1 = () => {
    setIsLoggedOut(true);
    navigate1("/CheckBalance");
  };
  const [isLogedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/Form4");
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
        <h3>TRANSACTION SUCCESSFUL..</h3>
        <Button variant="outlined" onClick={handleLogin1}>VIEW BALANCE</Button>
        <Button variant="contained" onClick={handleLogin}>EXIT</Button>
        </Stack>
    </div>
    </Box>
  )
}

export default Form3
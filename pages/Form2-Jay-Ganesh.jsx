import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { Box, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';



function Form2() {
  const [isLogedOut,setIsLoggedOut] = useState(false);
  const navigate1 = useNavigate();
  const handleLogin1 = () => {
    setIsLoggedOut(true);
    navigate1("/CheckBalance");
  };
  const [isLogedOut2,setIsLoggedOut2] = useState(false);
  const navigate2 = useNavigate();
  const handleLogin2 = () => {
    setIsLoggedOut2(true);
    navigate2("/ChangePin");
  };
  const [isLogedIn,setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/withdraw");
  };
  const [isLogedIn2,setIsLoggedIn2] = useState(false);
  const navigate3 = useNavigate();
  const handleLogin3 = () => {
    setIsLoggedIn2(true);
    navigate3("/Help");
  };
  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
    padding="right"
    >
    <div>
      <Stack spacing={0.5} minWidth="xs">
      <h3 className=''>SELECT YOUR TRANSACTION</h3>
      <Stack spacing={0.5} minWidth={200} direction="row">
      
      <Button variant="outlined"  fullWidth onClick={handleLogin}>WITHDRAW</Button>
      <Button variant="outlined" fullWidth onClick={handleLogin1}>BALANCE ENQUIRY</Button>
      </Stack>
      <Stack spacing={0.5} minWidth={300} direction="row">
      <Button variant="outlined"  fullWidth onClick={handleLogin2}>CHANGE PIN</Button>
      <Button variant="outlined" fullWidth onClick={handleLogin3}>HELP.?</Button>
      </Stack>
      
    
      </Stack>
    </div>
    </Box>
  );
}

export default Form2
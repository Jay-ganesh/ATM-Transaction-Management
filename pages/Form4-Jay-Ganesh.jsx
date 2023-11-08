import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom';


const Form4 = () => {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/BasicTable");
  };
  
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
        <Button variant='contained' onClick={handleLogin}>VIEW DETAILS</Button>
        </Stack>
        
    </div>
    </Box>
  )
}

export default Form4
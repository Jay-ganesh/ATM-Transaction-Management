import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ATM.css';

function ATM() {
  const [isLogedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/Form2");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      minHeight="90vh"
    >

      <div>
        <Stack spacing={0.5} minWidth="s">
          <h2 className=''>WELCOME TO ATM</h2>
          <TextField type='number' label="Card No" />
          <TextField type='password' label="PIN" />
          <Button variant='contained' onClick={handleLogin}>Submit</Button>
        </Stack>
      </div>
    </Box>
  );
};

export default ATM
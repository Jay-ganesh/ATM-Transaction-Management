import { Box, Button, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import {useParams } from 'react-router-dom';


function Help(){

  return (
    <Box
    display="flex"
    justifyContent="center"
    alignItems="start"
    minHeight="90vh"
  >

    <div>
      <Stack spacing={-0.2} minWidth="xs">
        <h4 className=''>INSTRUCTIONS...</h4>
        <h6><p>That depends on the machine.ATMs </p>
         <p>will have an image on the screen to </p>
         <p>the card reader showing which way to </p>
         <p>insert the card,especially if the card</p>
         <p>slot is vertical.For horizontally orie</p>
         <p>-nted card readers,the card is typically</p> 
         <p>inserted face up,the magnetic strip</p>
         <p>facing down and to the left.</p>
        </h6>
      
      
      
      </Stack>
    </div>
    </Box>
  );
  };

export default Help
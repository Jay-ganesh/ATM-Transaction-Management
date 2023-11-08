import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [userData, setUserData] = useState({
    userName: "",
    accountNumber: "",
    amount: "",
  });

  const { userName, accountNumber, amount } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      ...prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.post(`http://localhost:8080/adduser`, userData);
    setUserData({ userName: "", accountNumber: "", amount: "" });
    navigate("/BasicTable");
  };

  return (
    <Container>
      <Box>
        <form onSubmit={submitData}>
          <Stack spacing={2} marginTop={5} maxWidth={"40vh"}>
            <TextField
              variant="outlined"
              label="userName"
              name="userName"
              value={userName}
              onChange={handleData}
            />
            <TextField
              variant="outlined"
              label="accountNumber"
              name="accountNumber"
              value={accountNumber}
              onChange={handleData}
            />
            <TextField
              label="amount"
              name="amount"
              value={amount}
              variant="outlined"
              onChange={handleData}
            />
            <Stack direction={"row"} spacing={2}>
              <Button type="submit" variant="contained">
                Add User
              </Button>
              <Button href="/" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default AddUser;
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  let navigate = useNavigate();

  const { id } = useParams();

  const [userData, setUserData] = useState({
    userName: "",
    accountNumber: "",
    amount: "",
  });

  const { userName, accountNumber, amount } = userData;

  const handleData = (e) => {
    setUserData((prevUserData) => ({
      prevUserData,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitData = async (e) => {
    e.preventDefault();
    console.log(userData);
    await axios.put(`http://localhost:8080/update/${id}`, userData);
    navigate("/BasicTable");
  };

  const loadData = async (e) => {
    const result = await axios.get(`http://localhost:8080/finduser/${id}`);
    setUserData(result.data);
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
                update User
              </Button>
              <Button href="/BasicTable" color="error" variant="contained">
                Cancel
              </Button>
            </Stack>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default UpdateUser;
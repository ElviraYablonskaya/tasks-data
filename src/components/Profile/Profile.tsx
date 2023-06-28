import React from "react";
import { Container, Grid, Avatar, Button, TextField } from "@mui/material";

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ minHeight: "100vh" }}>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Avatar
            sx={{
              width: 150,
              height: 150,
              border: "2px solid rgb(136, 132, 216)",
              margin: "0px auto",
              marginBottom: "20px",
              backgroundColor: "#fff",
              color: "rgb(136, 132, 216)",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="First Name" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Last Name" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Email" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Password" type="password" fullWidth />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              backgroundColor: "#8884d8",
              marginTop: "15px",
              width: "150px",
            }}
          >
            Edit Profile
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;

import { Container, Typography, Button, styled, Box } from "@mui/material";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

const LargeMeetingRoomIcon = styled(LogoutIcon)({
  fontSize: 150,
  color: "#8884d8",
  paddingBottom: "30px",
});

const LogOut = () => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", minHeight: "100vh" }}>
      <Box
        width="600px"
        height="500px"
        sx={{
          background: "#f6f6f6",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LargeMeetingRoomIcon />
        <Typography variant="h5" component="h2" gutterBottom>
          Oh, no! You are leaving...
        </Typography>
        <Typography variant="h6" component="h2" gutterBottom>
          Are you sure?
        </Typography>
        <Button
          sx={{ backgroundColor: "#8884d8", marginTop: "25px", width: "150px" }}
          variant="contained"
        >
          log out
        </Button>
        <Button
          sx={{ backgroundColor: "#8884d8", marginTop: "15px", width: "150px" }}
          variant="contained"
          component={Link}
          to="/"
        >
          Back to home
        </Button>
      </Box>
    </Container>
  );
};

export default LogOut;

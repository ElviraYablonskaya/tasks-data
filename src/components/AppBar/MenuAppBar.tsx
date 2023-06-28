import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import { Button, Grid } from "@mui/material";
import styles from "./MenuAppBar.module.scss";
import { Link, useLocation } from "react-router-dom";

const MenuAppBar = () => {
  const [auth, setAuth] = React.useState(true);
  const location = useLocation();

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const activeStyle = {
    borderBottom: "2px solid #00ddc2",
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#fff", marginBottom: "50px" }}>
        <Toolbar>
          <h1 className={styles.title}>parleto</h1>
          <IconButton
            size="large"
            edge="start"
            color="secondary"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={auth}
                  onChange={handleChange}
                  aria-label="login switch"
                  sx={{ "& .MuiSwitch-thumb": { backgroundColor: "#8884d8" } }}
                />
              }
              label={auth ? "Hide Menu" : "Show Menu"}
              className={styles.label}
              labelPlacement="start"
            />
          </FormGroup>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          {auth && (
            <Grid
              container
              spacing={1}
              alignItems="center"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100vh",
                gap: "10px",
              }}
            >
              <Grid item>
                <Button
                  component={Link}
                  to="/"
                  className={`${styles.button} ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  style={location.pathname === "/" ? activeStyle : null}
                >
                  Dashboard
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/reports"
                  className={`${styles.button} ${
                    location.pathname === "/reports" ? "active" : ""
                  }`}
                  style={location.pathname === "/reports" ? activeStyle : null}
                >
                  Reports
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/expenses"
                  className={`${styles.button} ${
                    location.pathname === "/expenses" ? "active" : ""
                  }`}
                  style={location.pathname === "/expenses" ? activeStyle : null}
                >
                  Expenses
                </Button>
              </Grid>
              <Grid item>
                <Button
                  component={Link}
                  to="/profile"
                  className={`${styles.button} ${
                    location.pathname === "/profile" ? "active" : ""
                  }`}
                  style={location.pathname === "/profile" ? activeStyle : null}
                >
                  Profile
                </Button>
              </Grid>
            </Grid>
          )}
          <Button
            color="inherit"
            component={Link}
            to="/logOut"
            className={`${styles.logOut} ${
              location.pathname === "/logOut" ? "active" : ""
            }`}
            style={location.pathname === "/logOut" ? activeStyle : null}
          >
            Log out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MenuAppBar;

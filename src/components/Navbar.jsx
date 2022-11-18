import React, { useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AuthContextPro } from "../context/AuthContext";
import { Container } from "@mui/system";

const Navbar = () => {
  const navigate = useNavigate();
  const { userIn } = React.useContext(AuthContextPro);
  let visitor = localStorage.getItem("user");
  let name;
  let lastName;
  if (visitor) {
    name = JSON.parse(visitor)?.firstName;
    lastName = JSON.parse(visitor)?.lastName;
  }
  // console.log(JSON.parse(visitor));

  function logout() {
    // logout from the firebase missing
    localStorage.removeItem("user");
    navigate("/login");
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        margin: "0 auto",
      }}
    >
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="text-light text-decoration-none ">
                Movies
              </Link>
            </Typography>
            <Stack direction="row" spacing={2}>
              {userIn ? (
                <p>
                  {name} {lastName}
                </p>
              ) : (
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              )}
              {userIn ? (
                <Button color="inherit" variant="outlined" onClick={logout}>
                  Logout
                </Button>
              ) : (
                <Button
                  color="inherit"
                  variant="outlined"
                  onClick={() => navigate("/register")}
                >
                  Sign up
                </Button>
              )}
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

import { useTheme } from "@mui/material/styles";
import { Box, Button } from "@mui/material";

import logo from "../../assets/demeter.png";
import Person2Icon from "@mui/icons-material/Person2";
import HttpsIcon from "@mui/icons-material/Https";

import styles from "./login.css";

const Login = () => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={css.login}>
      <Box sx={css.loginCont}>
        <Box sx={css.logo}>
          <img src={logo} alt="Demeter" height={94} />
        </Box>
        <Box sx={css.welcome}>Welcome to Demeter</Box>
        <Box sx={css.formCont}>
          <form>
            <Box sx={css.inputCont}>
              <label>Your Email</label>
              <Box sx={css.inputBox}>
                <Person2Icon sx={css.inputIcon} />
                <input type="text" placeholder={"example@gmail.com"} />
              </Box>
            </Box>
            <Box sx={css.inputCont}>
              <label>Your password</label>
              <Box sx={css.inputBox}>
                <HttpsIcon sx={css.inputIcon} />
                <input type="password" />
              </Box>
            </Box>
            <Button sx={css.submitButton} size="small" variant="contained">
              Sign In
            </Button>
          </form>
          <Box sx={css.formLinks}>
            <Link to="/">Create Account</Link>
            <Link to="/">Forgot password?</Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

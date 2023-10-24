import React from "react";
import { useTheme } from "@mui/material/styles";

import { Link, NavLink } from "react-router-dom";

import { Box, Grid, List, ListItem } from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

import styles from "./header.css";

import logo from "../../assets/demeter-logo.png";

const MainMenu = () => {
  const theme = useTheme();
  const css = styles(theme);
  return (
    <List component="nav" sx={css.menuList}>
      <ListItem component={NavLink} to="/price-checker?search=">
        Price Checker
      </ListItem>
      <ListItem component={NavLink} to="/recipes">
        Meal Planning
      </ListItem>
    </List>
  );
};

const ProfileMenu = () => {
  const theme = useTheme();
  const css = styles(theme);
  return (
    <List component="nav" sx={{ ...css.profileMenu }}>
      <ListItem component={NavLink} to="">
        <ShoppingCartIcon />
      </ListItem>
      <ListItem component={NavLink} to="/login">
        <AccountCircleIcon />
      </ListItem>
    </List>
  );
};

const Header = () => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={css.header}>
      <Box sx={css.container}>
        <Grid container>
          <Grid item xs={1}>
            <Box sx={css.logo}>
              <Link to="/">
                <img src={logo} alt="Demeter" height={83} />
              </Link>
            </Box>
          </Grid>
          <Grid item xs>
            <MainMenu />
          </Grid>
          <Grid item xs={2}>
            {/* <ProfileMenu /> */}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Header;

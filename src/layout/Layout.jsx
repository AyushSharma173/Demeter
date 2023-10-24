import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

import Header from "../components/Header/Header";

import styles from "./layout.css";

const Layout = ({ children, background = "#fff", ...otherProps }) => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={{ backgroundColor: background }} {...otherProps}>
      <Header />
      <Box>{children}</Box>
    </Box>
  );
};

export default Layout;

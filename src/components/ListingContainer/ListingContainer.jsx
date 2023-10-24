import React from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Typography, List, ListItem, Grid } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import img from "../../assets/product.png";

import styles from "./listing-container.css";

const ListingContainer = ({ children }) => {
  const theme = useTheme();
  const css = styles(theme);

  return <Box sx={{ ...css.container, ...css.lc }}>{children}</Box>;
};

export default ListingContainer;

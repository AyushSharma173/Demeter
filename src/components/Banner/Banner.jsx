import React from "react";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";

import { Box } from "@mui/material";

import styles from "./banner.css";

import demeter from "../../assets/demeter.png";

import SearchBar from "../SearchBar/SearchBar";

const Banner = () => {
  const theme = useTheme();
  const css = styles(theme);

  const navigate = useNavigate();

  const handleSubmit = (e, searchText) => {
    e.preventDefault();
    navigate("/price-checker?search=" + searchText);
  };

  return (
    <Box sx={css.banner}>
      <Box sx={css.container}>
        <Box>
          <Box mt={4} pb={1}>
            <img src={demeter} height="190" />
          </Box>
          <Box pb={5}>
            <SearchBar variant="banner" handleSubmit={handleSubmit} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;

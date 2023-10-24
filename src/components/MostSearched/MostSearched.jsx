import React from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Typography, Grid } from "@mui/material";

import img from "../../assets/product.png";

import styles from "./mostsearched.css";

const MostSearched = ({ items }) => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={css.ms}>
      <Box sx={css.container}>
        <Typography sx={css.title}>Featured Discounts</Typography>
        <Grid container sx={css.list} spacing={4}>
          {items.map((c, i) => (
            <Grid item xs={3} key={i}>
              <Box sx={css.item}>
                <Box sx={css.image}>
                  <img src={img} />
                </Box>
                <Box sx={css.name}>{c.name}</Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default MostSearched;

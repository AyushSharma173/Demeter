import React from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Grid } from "@mui/material";
import ProductDetail from "../ProductDetail/ProductDetail";
import MealPreview from "../MealPreview/MealPreview";

import styles from "./meal-listing.css";

const MealListing = ({ items, column = 6 }) => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Grid container spacing={6}>
      <Grid item>
        <Grid container sx={css.list} spacing={4}>
          {items?.map((c, i) => (
            <Grid item xs={column} key={i}>
              <MealPreview item={c} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MealListing;

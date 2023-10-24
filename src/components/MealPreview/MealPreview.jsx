import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";

import itemImage from "../../assets/meal.png";

import styles from "./meal-preview.css";

const MealPreview = ({ item }) => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={css.item}>
      <Link to={"/recipes/" + item.Category + "/" + item.RecipeID}>
        <Box sx={css.image}>
          <img src={item?.PhotoUrl} />
        </Box>
        {/* <Box sx={css.serving}>
          {item.uom}
          {item.price}
          {" off"}
        </Box> */}

        <Typography sx={css.title} variant="h3">
          {item.Title}
        </Typography>
        <Typography sx={css.desc}>
          {item?.Ingredients.map((c, i) => {
            return c.Name + (i === item?.Ingredients.length - 1 ? "" : ", ");
          })}
        </Typography>
      </Link>
    </Box>
  );
};

export default MealPreview;

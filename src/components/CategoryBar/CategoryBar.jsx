import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { Box, List, ListItem } from "@mui/material";

import styles from "./categoryBar.css";

import mockCategories from "./categories";

const CategoryBar = ({ variant = "default", items = mockCategories }) => {
  const theme = useTheme();
  const css = styles(theme);

  return (
    <Box sx={{ ...css.categoryBar, ...css[variant] }}>
      <Box sx={css.container}>
        <List sx={css.list}>
          {items.map((c, i) => (
            <ListItem sx={css.listItem} key={i}>
              <Link to={"/price-checker?search=" + c.name}>
                <Box sx={css.image}>
                  <img src={c.icon} />
                </Box>
                <Box sx={css.nameLink}>{c.name}</Box>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default CategoryBar;

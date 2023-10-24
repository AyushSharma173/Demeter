import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Box, Select, MenuItem } from "@mui/material";

import sortbyicon from "../../assets/sort-by.png";

import styles from "./sortby.css";

const SortBy = ({ updateSort = () => {} }) => {
  const theme = useTheme();
  const css = styles(theme);

  const [sortValue, setSortValue] = useState("ce");

  const handleChange = (e) => {
    e.preventDefault();
    setSortValue(e.target.value);
    updateSort(e.target.value);
  };

  return (
    <Box sx={{ ...css.searschBar }}>
      <Select
        sx={css.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortValue}
        MenuProps={{
          sx: css.menu,
        }}
        label="Sort By"
        onChange={handleChange}
        IconComponent={() => {
          return <img src={sortbyicon} height={28} />;
        }}
      >
        <MenuItem value="ce">Price</MenuItem>
        <MenuItem value="bs">Score</MenuItem>
        <MenuItem value="bv">Value</MenuItem>
      </Select>
    </Box>
  );
};

export default SortBy;

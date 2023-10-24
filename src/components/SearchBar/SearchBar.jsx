import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import { Box, IconButton } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import styles from "./searchbar.css";

const SearchBar = ({
  variant = "",
  searchValue = "",
  placeholder = "Fish, Household etc...",
  handleSubmit = () => {},
}) => {
  const theme = useTheme();
  const css = styles(theme);

  const [searchText, setSearchText] = useState(searchValue);

  useEffect(() => {
    setSearchText(searchValue);
  }, [searchValue]);

  return (
    <Box sx={{ ...css.searchBar, ...css[variant] }}>
      <form method="Post" onSubmit={(e) => handleSubmit(e, searchText)}>
        <input
          name="searchField"
          type="search"
          value={searchText}
          placeholder={placeholder}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <IconButton
          type="submit"
          sx={{ ...css.searchIcon, ...css[`searchIcon${variant}`] }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </form>
    </Box>
  );
};

export default SearchBar;

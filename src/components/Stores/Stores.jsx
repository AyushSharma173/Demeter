import React, { useState, useRef } from "react";
import { useTheme } from "@mui/material/styles";
import Slider from "react-slick";

import { Box, Grid, Typography } from "@mui/material";

import styles from "./stores.css";

const Stores = ({
  items,
  isLoading,
  data = {},
  onStoreSelect = () => {},
  column = 2,
}) => {
  const theme = useTheme();
  const css = styles(theme);

  const carousel = useRef(null);

  const [store, setStore] = useState("");

  const storeClick = (e, val) => {
    e.preventDefault();

    setStore(val);
    onStoreSelect(val);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };

  const Slides = ({ list, children }) => {
    if (list.length < 5) {
      return <Box sx={css.brandItems}>{children}</Box>;
    }

    return (
      <Slider ref={carousel} {...settings}>
        {children}
      </Slider>
    );
  };

  return (
    <Box sx={css.ms}>
      <Box sx={css.container}>
        <Box position="relative">
          <Typography sx={css.title}>Choose a store</Typography>
        </Box>
        <Grid container sx={css.list} columnSpacing={4}>
          <Grid item xs={2} key={"a"}>
            <Box sx={css.item}>
              <Box
                sx={{
                  ...css.image,
                  ...css.allStores,
                  ...(store === "combined" && css.selectedAll),
                }}
                onClick={(e) => {
                  storeClick(e, "combined");
                }}
              >
                All Stores
              </Box>
            </Box>
          </Grid>
          <Grid item xs={10}>
            {isLoading ? (
              <Box textAlign="left">Loading all stores...</Box>
            ) : (
              <Slides list={Object.keys(data)}>
                {Object.keys(data).map((c, i) => {
                  if (c === "combined") return "";
                  return (
                    <Box sx={css.item} key={c}>
                      <Box
                        sx={{
                          ...css.image,
                          ...(store === c && css.selected),
                        }}
                        onClick={(e) => {
                          storeClick(e, c);
                        }}
                      >
                        {items[c] ? (
                          <img src={items[c] || items["noImage"]} />
                        ) : (
                          <Box sx={css.noImage}>{c}</Box>
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Slides>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Stores;

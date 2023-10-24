import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

import { Box, Rating, Typography, Button, List, ListItem } from "@mui/material";

import storeImages from "../../assets/stores/storeImages";

import styles from "./product-detail.css";

const ProductDetail = ({ item, column = 4 }) => {
  const theme = useTheme();
  const css = styles(theme);

  const price = item?.extracted_price || item?.price || "N/A";

  return (
    <Box sx={css.pd}>
      <Box sx={css.height}>
        <Box sx={css.brand}>
          <img src={storeImages[item.store]} />
        </Box>
        <Box sx={css.image}>
          <img src={item.thumbnail} />
        </Box>
        <Typography sx={css.title} variant="h3">
          <Link target="_blank" to={item.link}>
            {item?.extracted_title || item?.title}
          </Link>
        </Typography>

        <Box sx={css.rating}>
          {item.product_rating &&
            item.product_rating !== "Not Found" &&
            item.product_rating > -1 && (
              <>
                <Box sx={css.ratingText}>Rating: {item.product_rating}</Box>
                <Rating
                  name="read-only"
                  value={item.product_rating}
                  precision={0.2}
                  readOnly
                />
              </>
            )}
        </Box>
        <Box sx={css.prices}>
          <Box sx={css.price}>Price: {price}</Box>
          <Box sx={css.priceSave}>{item?.value_per_unit}</Box>
        </Box>

        {item?.savings && item?.savings != "N/A" && !!item?.savings?.length && (
          <>
            <Box sx={css.saving}>Savings:</Box>
            <List sx={css.reasonsList}>
              {item?.savings.map((i, j) => (
                <ListItem key={j} sx={css.savingReasonsListItem}>
                  {i}
                </ListItem>
              ))}
            </List>
          </>
        )}

        <Box sx={css.desc}>
          {!!item?.reasons_to_buy?.length && (
            <>
              <Box sx={css.reasons}>Pros:</Box>
              <List sx={css.reasonsList}>
                {item?.reasons_to_buy.map((i) => (
                  <ListItem sx={css.reasonsListItem}>{i}</ListItem>
                ))}
              </List>
            </>
          )}
          {!!item?.reasons_not_to_buy?.length && (
            <>
              <Box sx={css.reasons}>Cons:</Box>
              <List sx={css.reasonsList}>
                {item?.reasons_not_to_buy.map((i) => (
                  <ListItem sx={css.reasonsListItem}>{i}</ListItem>
                ))}
              </List>{" "}
            </>
          )}
        </Box>
        <Box sx={css.actions}>
          <Button size="small" variant="contained">
            Track Price
          </Button>
          <Button size="small" variant="contained">
            Add to Shopping List
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;

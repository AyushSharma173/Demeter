import React from "react";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import styles from "./product-preview.css";

import storeImages from "../../assets/stores/storeImages";

const ProductPreview = ({ item, loadDetails }) => {
  const theme = useTheme();
  const css = styles(theme);

  const valuePerUnitPrice =
    (item?.value_per_unit !== "N/A" && item?.value_per_unit) ||
    (item?.extracted_price && "$" + item?.extracted_price) ||
    (item?.price && "$" + item?.price) ||
    "N/A";

  return (
    <Box sx={css.item} onClick={(e) => loadDetails(e, item.product_hash)}>
      <Box sx={css.brands}>
        <img src={storeImages[item.store]} />
      </Box>
      <Box sx={css.image}>
        <img src={item.thumbnail} />
      </Box>
      {(item?.extracted_price || item?.price) && (
        <Box sx={css.price}>
          {"$"}
          {item?.extracted_price || item?.price}
        </Box>
      )}
      {(item?.extracted_discount > 0 || item?.discount > 0) && (
        <Box sx={css.offPrice}>
          {"$"}
          {item?.extracted_discount || item?.discount}
          {" off"}
        </Box>
      )}
      <Box sx={css.brand}>
        <Link target="_blank" to={item.link}>
          View In {item.store} site
        </Link>
      </Box>
      <Box sx={css.desc}>{item?.extracted_title || item?.title}</Box>
      <Box sx={css.up}>
        <Box sx={css.ellipsis} title={valuePerUnitPrice}>
          {valuePerUnitPrice}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPreview;

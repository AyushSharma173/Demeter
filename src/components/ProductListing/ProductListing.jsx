import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import { Grid, Typography, Box } from "@mui/material";
import ProductDetail from "../ProductDetail/ProductDetail";
import ProductPreview from "../ProductPreview/ProductPreview";
import CategoryBar from "../CategoryBar/CategoryBar";
import SortBy from "../SortBy/SortBy";

import { getProductsForTasks } from "../../api/apis";

import styles from "./product-listing.css";

const ProductListing = ({
  tasks = {},
  store = "combined",
  items,
  column = 4,
}) => {
  const theme = useTheme();
  const css = styles(theme);
  const [sortValue, setSortValue] = useState("ce");
  const [productsByValue, setProductsByValue] = useState({});

  const getProductsDisplay = () => {
    if (sortValue === "bv") {
      return productsByValue[store] || [];
    }
    return items && items[store]
      ? items[store][sortValue === "ce" ? "sorted_by_price" : "sorted_by_score"]
      : [];
  };

  const [productsDisplay, setProductsDisplay] = useState(getProductsDisplay);

  useEffect(() => {
    setProductsDisplay(getProductsDisplay());
  }, [sortValue, store]);

  useEffect(() => {
    if (sortValue !== "bv") {
      Object.keys(tasks).map((c) => {
        getProductsForTasks(tasks[c], c).then((res) => {
          setProductsByValue((prev) => {
            return { ...prev, [c]: res.output };
          });
        });
      });
    }
  }, []);

  const [openProduct, setOpenProduct] = useState(productsDisplay[0]);

  const loadDetail = (e, product_hash) => {
    setOpenProduct(
      productsDisplay.find((prod) => prod.product_hash === product_hash)
    );
  };

  if (!productsDisplay.length)
    return (
      <Box>
        <Typography sx={css.notFound}>
          Couldn't find any products! <br />
          please check the <strong>search field query</strong> or choose from
          the below categories.
        </Typography>
        <CategoryBar />
      </Box>
    );

  return (
    <Grid container spacing={6}>
      <Grid item xs={7}>
        <SortBy updateSort={setSortValue} />
        <Grid container sx={css.list} spacing={4}>
          {productsDisplay.map((c, i) => (
            <Grid item xs={column} key={c.product_hash}>
              <ProductPreview item={c} loadDetails={loadDetail} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={5}>
        <ProductDetail item={openProduct} />
      </Grid>
    </Grid>
  );
};

export default ProductListing;

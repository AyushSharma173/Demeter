import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Box } from "@mui/material";

import { useSearchParams, useNavigate } from "react-router-dom";

import Layout from "../../layout/Layout";

import ProductListing from "../../components/ProductListing/ProductListing";
import ListingContainer from "../../components/ListingContainer/ListingContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

import Stores from "../../components/Stores/Stores";
import storeImages from "../../assets/stores/storeImages";

import { getProducts } from "../../api/apis";
import LoadAPI from "../../api/apiControlLoading";
import loader from "../../assets/loader.png";

import { styles, rotate } from "./products.css";

const Products = () => {
  const theme = useTheme();
  const css = styles(theme);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [payload, setPayload] = useState({
    query: searchParams.get("search") || "",
  });
  useEffect(() => {
    setPayload({ query: searchParams.get("search") || "" });
  }, [searchParams]);

  const [store, setStore] = useState(undefined);
  const onStoreSelect = (val) => {
    setStore(val);
  };

  const responseSanitize = (res) => {
    return {
      ...res?.data,
      output: JSON.parse(res?.data?.output?.replaceAll(": NaN", ": null")),
    };
  };

  const handleSubmit = (e, searchText) => {
    e.preventDefault();
    navigate("/price-checker?search=" + searchText);
  };

  return (
    <Layout pb={10} background={theme.palette.background.shade}>
      <Box pt={3} pb={1}>
        <SearchBar
          variant="listing"
          handleSubmit={handleSubmit}
          searchValue={searchParams.get("search")}
        />
      </Box>

      <LoadAPI
        payload={payload}
        functionApi={getProducts}
        showSkeleton={false}
        responseSanitize={responseSanitize}
      >
        {(data = {}, isLoading) => {
          return (
            <>
              <Box pt={1} pb={5}>
                <ListingContainer>
                  {isLoading ? (
                    <Box
                      sx={{
                        ...css.loader,
                        animation: rotate + " 2s linear infinite",
                      }}
                    >
                      <img src={loader} />
                    </Box>
                  ) : (
                    <ProductListing
                      tasks={data?.task_ids}
                      items={data?.output}
                      store={store}
                    />
                  )}
                </ListingContainer>
              </Box>
              <Stores
                isLoading={isLoading}
                data={data?.output}
                items={storeImages}
                onStoreSelect={onStoreSelect}
              />
            </>
          );
        }}
      </LoadAPI>
    </Layout>
  );
};

export default Products;

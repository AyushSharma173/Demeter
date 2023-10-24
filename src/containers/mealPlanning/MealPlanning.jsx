import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";

import { Box } from "@mui/material";

import { useSearchParams, useNavigate } from "react-router-dom";

import Layout from "../../layout/Layout";

import MealListing from "../../components/MealListing/MealListing";
import ListingContainer from "../../components/ListingContainer/ListingContainer";
import SearchBar from "../../components/SearchBar/SearchBar";

import itemsLi from "../../mocks/meal-list.json";

import { getRecipe } from "../../api/apis";
import LoadAPI from "../../api/apiControlLoading";
import loader from "../../assets/loader.png";

import { styles, rotate } from "./meal-planning.css";

const MealPlanning = () => {
  const theme = useTheme();
  const css = styles(theme);

  const navigate = useNavigate();

  let [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e, searchText) => {
    e.preventDefault();
    navigate("/recipes?search=" + searchText);
  };

  const responseSanitize = (res) => {
    return [...res?.data];
  };

  return (
    <Layout pb={10}>
      <Box pt={3} pb={1}>
        <SearchBar
          variant="listing"
          placeholder="ENTER RECIPE NAMES OR INGREDIENTS YOU HAVE"
          handleSubmit={handleSubmit}
          searchValue={searchParams.get("search")}
        />
        <Box sx={css.searchText}>
          Search for your meals or enter ingredients you have/Refer to our
          recommendations for best values meals for this week.
        </Box>
      </Box>
      <Box py={3}>
        <ListingContainer>
          <LoadAPI
            payload={{
              query: searchParams.get("search") || "",
            }}
            functionApi={getRecipe}
            showSkeleton={false}
            responseSanitize={responseSanitize}
          >
            {(data = [], isLoading) => {
              return isLoading ? (
                <Box
                  sx={{
                    ...css.loader,
                    animation: rotate + " 2s linear infinite",
                  }}
                >
                  <img src={loader} />
                </Box>
              ) : (
                <MealListing items={data} />
              );
            }}
          </LoadAPI>
        </ListingContainer>
      </Box>
    </Layout>
  );
};

export default MealPlanning;

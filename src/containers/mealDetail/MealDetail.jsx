import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Link, useParams } from "react-router-dom";

import { Box, Grid, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";

import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Layout from "../../layout/Layout";

import itemsLi from "../../mocks/meal-list.json";

import { styles, rotate } from "./meal-detail.css";

import { getRecipeDetail } from "../../api/apis";
import loader from "../../assets/loader.png";

import storeImages from "../../assets/stores/storeImages";

const MealDetail = () => {
  const theme = useTheme();
  const css = styles(theme);

  const params = useParams();

  const item = itemsLi[params.recipeId];

  const [recipe, setRecipe] = useState({ data: {}, isLoading: true });

  useEffect(() => {
    getRecipeDetail(params).then(({ data, isLoading }) => {
      setRecipe({ data, isLoading });
    });
  }, []);

  return (
    <Layout pb={10}>
      <Box py={3} sx={css.container}>
        <Box sx={css.backLink} mb={2}>
          <Link to="/recipes">Back</Link>
        </Box>
        {recipe.isLoading ? (
          <Box
            sx={{
              ...css.loader,
              animation: rotate + " 2s linear infinite",
            }}
          >
            <img src={loader} />
          </Box>
        ) : (
          <>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box sx={css.image}>
                  <img src={recipe.data.PhotoUrl} />
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={css.title} variant="h1">
                  {recipe.data.Title}
                </Typography>
                <Typography sx={css.serving}>
                  <strong>$0.00/serving</strong> average based on best prices
                  found per unit in nearby stores
                </Typography>
                <Typography sx={css.calperServing}>
                  Calories per serving:{" "}
                  {recipe.data.NutritionInfo.TotalCalories}
                </Typography>
                <Typography sx={css.desc}>{recipe.data.Description}</Typography>
              </Grid>
            </Grid>
            <Box sx={css.tableDesc}>
              *Amount needed for {recipe.data.YieldNumber}{" "}
              {recipe.data.YieldUnit}
              <Box sx={css.tableDesc2}>
                *Based on best value per unis from each of the respective stores
              </Box>
            </Box>
            <Box sx={css.table}>
              <TableContainer sx={css.tabCont} component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead sx={css.tableHead}>
                    <TableRow>
                      <TableCell>INGREDIENTS</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right" sx={css.brandCell}>
                        <img src={storeImages.Meijer} />
                      </TableCell>
                      <TableCell align="right" sx={css.brandCell}>
                        <img src={storeImages.Target} />
                      </TableCell>
                      <TableCell align="right" sx={css.brandCell}>
                        <img src={storeImages.Walmart} />
                      </TableCell>
                      <TableCell align="right" sx={css.brandCell}>
                        <img src={storeImages["Lowe's"]} />
                      </TableCell>
                      <TableCell align="right" sx={css.brandCell}>
                        <img src={storeImages["Family Dollar"]} />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recipe.data.Ingredients.map((row, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.Name}
                        </TableCell>
                        <TableCell align="right">
                          {row.MetricQuantity} {row.MetricUnit}
                        </TableCell>
                        <TableCell sx={css.tableBrand} align="right">
                          $0.99
                          <Link
                            target="_blank"
                            to={"/price-checker?search=" + row.Name}
                          >
                            View
                          </Link>
                        </TableCell>
                        <TableCell sx={css.tableBrand} align="right">
                          $0.99
                          <Link
                            target="_blank"
                            to={"/price-checker?search=" + row.Name}
                          >
                            View
                          </Link>
                        </TableCell>
                        <TableCell sx={css.tableBrand} align="right">
                          $0.99
                          <Link
                            target="_blank"
                            to={"/price-checker?search=" + row.Name}
                          >
                            View
                          </Link>
                        </TableCell>
                        <TableCell sx={css.tableBrand} align="right">
                          $0.99
                          <Link
                            target="_blank"
                            to={"/price-checker?search=" + row.Name}
                          >
                            View
                          </Link>
                        </TableCell>
                        <TableCell sx={css.tableBrand} align="right">
                          $0.99
                          <Link
                            target="_blank"
                            to={"/price-checker?search=" + row.Name}
                          >
                            View
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow
                      key="last"
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        ...css.tableFoot,
                      }}
                    >
                      <TableCell component="th" scope="row">
                        Total
                      </TableCell>
                      <TableCell align="right"></TableCell>
                      <TableCell sx={css.tableBrand} align="right">
                        <strong>$21.31</strong>
                        <span>&nbsp;</span>
                      </TableCell>
                      <TableCell sx={css.tableBrand} align="right">
                        <strong>$17.51</strong>
                        <span>*Some items unavailable</span>
                      </TableCell>
                      <TableCell sx={css.tableBrand} align="right">
                        <strong> $14.54</strong>
                        <span>&nbsp;</span>
                      </TableCell>
                      <TableCell sx={css.tableBrand} align="right">
                        <strong> $18.77</strong>
                        <span> *Some items unavailable</span>
                      </TableCell>
                      <TableCell sx={css.tableBrand} align="right">
                        <strong> $13.57</strong>
                        <span> *Some items unavailable</span>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Typography sx={css.InsHead}>
              INSTRUCTIONS TO COOK {recipe.data.YieldNumber}{" "}
              {recipe.data.YieldUnit} Of {recipe.data.Title}:
            </Typography>
            <ol>
              {Array.isArray(recipe.data.Instructions)
                ? recipe.data.Instructions.map((c, i) => <li key={i}>{c}</li>)
                : recipe.data.Instructions.split(". ").map(
                    (c, i) => c && <li key={i}>{c}.</li>
                  )}
            </ol>
            <Box sx={css.viewFull}>
              <Link target="_blank" to={recipe.data.WebURL}>
                View Full Instructions & Video.....
              </Link>
            </Box>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default MealDetail;

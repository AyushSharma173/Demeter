import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CssBaseline, GlobalStyles } from "@mui/material";

import Login from "./containers/login/Login";
import Home from "./containers/home/Home";
import Products from "./containers/products/Products";
import MealPlanning from "./containers/mealPlanning/MealPlanning";
import MealDetail from "./containers/mealDetail/MealDetail";

import customTheme from "./layout/theme";

import "./App.css";
import "./layout/slick.css";
import "./layout/slick-theme.css";

const globalStyles = (
  <GlobalStyles
    styles={{
      a: {
        textDecoration: "none",
      },
      "*": {
        transition: "height 0.5s ease",
        transition: "background-color 0.5s ease",
      },
    }}
  />
);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/price-checker" element={<Products />} />
          <Route path="/recipes" element={<MealPlanning />} />
          <Route
            path="/recipes/:categoryId/:recipeId"
            element={<MealDetail />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

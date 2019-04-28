import React, { useState } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";

import SearchForm from "./components/SearchForm";
import Recipes from "./components/Recipes";

const containerStyle = {
  textAlign: "center"
};

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const API_KEY = "86a6d7f3a42992d00265a65cc247e16e";

  const fetchRecipe = async name => {
    if (name !== undefined && name !== "") {
      const API_URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${name}`;
      try {
        const response = await axios.get(API_URL);
        console.log("response :", response);
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter a recipe name");
    }
  };

  const getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    fetchRecipe(recipeName);
  };

  return (
    <Container style={containerStyle}>
      <SearchForm getRecipe={getRecipe} />
      <Recipes recipes={recipes} />
    </Container>
  );
};

export default App;

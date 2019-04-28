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

  const API_ID = "1d018658";
  const API_KEY = "eefe424911982c21e5f6506847fff4fe";

  const fetchRecipe = async name => {
    if (name !== undefined && name !== "") {
      const API_URL = `https://api.edamam.com/search?q=${name}&app_id=${API_ID}&app_key=${API_KEY}&to=10`;
      try {
        const response = await axios.get(API_URL);
        setRecipes(response.data.hits);
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
      <Recipes recipes={recipes}/>
    </Container>
  );
};

export default App;

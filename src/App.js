import React, { useState } from "react";
import axios from "axios";

import SearchForm from "./components/SearchForm";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const API_KEY = "86a6d7f3a42992d00265a65cc247e16e";

  const fetchRecipe = async recipeName => {
    if (recipeName !== undefined && recipeName !== "") {
      const API_URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=5`;
      try {
        const response = await axios.get(API_URL);
        setRecipes(response.data.recipes);
        console.log(recipes);
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

  return <SearchForm getRecipe={getRecipe} />;
};

export default App;

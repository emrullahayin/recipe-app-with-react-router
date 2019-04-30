import React, { useState, useEffect } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

import SearchForm from "./components/SearchForm";
import Recipes from "./components/Recipes";

const containerStyle = {
  textAlign: "center"
};

const App = () => {
  const prevRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
  const [recipes, setRecipes] = useState(prevRecipes);
  const [loading, setLoading] = useState(true);

  const API_ID = "1d018658";
  const API_KEY = "2d32770f279b4e12e5dc99d98b50573a";

  const fetchRecipe = async name => {
    if (name !== undefined && name !== "") {
      const API_URL = `https://api.edamam.com/search?q=${name}&app_id=${API_ID}&app_key=${API_KEY}&to=100`;
      try {
        const response = await axios.get(API_URL);
        setRecipes(response.data.hits);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    } else {
      alert("Please enter a recipe name");
    }
  };

  const getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    setLoading(true);
    fetchRecipe(recipeName);
  };

  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(recipes));
    localStorage.getItem("recipes").length && setLoading(false);
  }, [recipes]);

  return (
    <Container style={containerStyle}>
      <SearchForm getRecipe={getRecipe} />
      {loading === true ? (
        <Spinner className="mt-3" animation="border" variant="primary" />
      ) : (
        <Recipes recipes={recipes} />
      )}
    </Container>
  );
};

export default App;

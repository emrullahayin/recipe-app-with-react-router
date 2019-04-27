import React, { useState } from "react";
import axios from "axios";

import SearchForm from "./components/SearchForm";

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
    <div>
      <SearchForm getRecipe={getRecipe} />
      {recipes.map((data, index) => (
        <div key={index}>
          <h1 className="mt-3">{data.recipe.label}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;

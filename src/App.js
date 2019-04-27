import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchForm from "./components/SearchForm";

const App = () => {
  //const [recipe, setRecipe] = useState();
  const API_KEY = "86a6d7f3a42992d00265a65cc247e16e";

  const API_URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=chicken&count=5`;

  const fetchRecipe = async e => {
    try {
      const response = await axios.get(API_URL);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
    fetchRecipe()
  };

  return <SearchForm getRecipe={getRecipe} />;
};

export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState();

  const API_ID = "1d018658";
  const API_KEY = "2d32770f279b4e12e5dc99d98b50573a";

  const getRecipe = async () => {
    const API_URL = `https://api.edamam.com/search?q=""&app_id=${API_ID}&app_key=${API_KEY}&to=50`;
    try {
      const response = await axios.get(API_URL);
      //setRecipes(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => console.log("getRecipe", getRecipe), []);
  
  return (
    <div>
      <h1>React Components!</h1>
    </div>
  );
};

export default Recipe;

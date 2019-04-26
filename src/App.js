import React, { useState } from "react";
import SearchForm from "./components/SearchForm";

const App = () => {
  const [recipe, setRecipe] = useState();

  const getRecipe = () => {
    console.log("Working!!! :");
  };

  return <SearchForm getRecipe={getRecipe} />;
};

export default App;

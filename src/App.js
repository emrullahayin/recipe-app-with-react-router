import React, { useState } from "react";
import SearchForm from "./components/SearchForm";

const App = () => {
  //const [recipe, setRecipe] = useState();

  const getRecipe = e => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    console.log(recipeName);
  };

  return <SearchForm getRecipe={getRecipe} />;
};

export default App;

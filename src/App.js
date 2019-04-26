import React, { useState } from "react";
import SearchForm from "./components/SearchForm";

const App = () => {
  //const [recipe, setRecipe] = useState();

  const getRecipe = e => {
    e.preventDefault();
    console.log("Working!!!");
  };

  return <SearchForm getRecipe={getRecipe} />;
};

export default App;

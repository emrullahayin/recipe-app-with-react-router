import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "react-bootstrap/Card";

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);
  console.log("props :", props.location.state.recipe);
  const API_ID = "1d018658";
  const API_KEY = "2d32770f279b4e12e5dc99d98b50573a";

  const getRecipe = async () => {
    const title = props.location.state.recipe;
    const API_URL = `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setActiveRecipe(response.data.hits[0].recipe);
      console.log(response.data.hits);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => console.log("getRecipe", getRecipe()), []);

  return (
    <div className="container">
      {[activeRecipe].map((recipe, index) => (
        <Card
          bg="light"
          style={{
            width: "100%",
            marginBottom: "1em",
            display: "inline-block"
          }}
          key={recipe.label + index}
        >
          <Card.Img variant="top" src={recipe.image} alt={recipe.label} />
          <Card.Body>
            <Card.Title>{recipe.label}</Card.Title>
            <Card.Text>{recipe.source}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Recipe;

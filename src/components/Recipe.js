import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);
  const API_ID = "1d018658";
  const API_KEY = "2d32770f279b4e12e5dc99d98b50573a";

  const getRecipe = async () => {
    const title = props.location.state.recipe;
    const API_URL = `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setActiveRecipe(response.data.hits[0].recipe);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="container text-center">
      {activeRecipe.length !== 0 && (
        <Card
          bg="light"
          style={{
            width: "300px",
            marginBottom: "1em",
            display: "inline-block"
          }}
        >
          <Card.Img
            variant="top"
            src={activeRecipe.image}
            alt={activeRecipe.label}
          />
          <Card.Body>
            <Card.Title>{activeRecipe.label}</Card.Title>
            <Card.Text>{activeRecipe.source}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Button variant="outline-primary">
              <Link to="/">Go Home</Link>
            </Button>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default Recipe;

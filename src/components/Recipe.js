import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_ID = "your api id";
  const API_KEY = "your api key";

  const getRecipe = async () => {
    const title = props.location.state.recipe;
    const API_URL = `https://api.edamam.com/search?q=${title}&app_id=${API_ID}&app_key=${API_KEY}`;
    try {
      const response = await axios.get(API_URL);
      setActiveRecipe(response.data.hits[0].recipe);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipe();
  })

  return (
    <div className="container text-center">
      {loading === true ? (
        <Spinner className="mt-3" animation="border" variant="primary" />
      ) : (
        <div>
          {activeRecipe.length !== 0 ? (
            <Card
              bg="light"
              style={{
                width: "300px",
                marginBottom: "1em",
                marginTop: "1em",
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
                <Link to="/">
                  <Button variant="outline-primary">Go Home</Button>
                </Link>
              </Card.Body>
            </Card>
          ) : (
            <Alert className="mt-3" variant="danger">
              There were no results!!
              <Link to="/">
                <Button className="ml-3" variant="outline-danger">
                  Go Home
                </Button>
              </Link>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipe;

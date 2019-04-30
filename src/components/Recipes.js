import React from "react";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

const Recipes = props => {
  const { recipes } = props;
  const column = window.innerWidth < 769 ? 2 : 4;
  return (
    <div className="mt-4" style={{ columnCount: column, columnGap: "1em" }}>
      {recipes.map((recipe, index) => (
        <Card
          bg="light"
          style={{
            width: "100%",
            marginBottom: "1em",
            display: "inline-block"
          }}
          key={index}
        >
          <Card.Img
            variant="top"
            src={recipe.recipe.image}
            alt={recipe.recipe.label}
          />
          <Card.Body>
            <Card.Title>{recipe.recipe.label}</Card.Title>
            <Card.Text>{recipe.recipe.source}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe.label
                  .replace(/\s+/g, "-")
                  .toLowerCase() +
                  "-" +
                  index}`,
                state: { recipe: recipe.recipe.label }
              }}
            >
              View Recipe
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;

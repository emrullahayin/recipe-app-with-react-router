import React from "react";

import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

const Recipes = props => {
  const { recipes } = props;

  return (
    <div className="mt-4" style={{ columnCount: "2", columnGap: "1em" }}>
      {recipes.map(recipe => (
        <Card
          bg="light"
          style={{
            width: "100%",
            marginBottom: "1em",
            display: "inline-block"
          }}
          key={recipe.recipe_id}
        >
          <Card.Img variant="top" src={recipe.image_url} alt={recipe.title} />
          <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Text>{recipe.publisher}</Card.Text>
          </Card.Body>
          <Card.Body>
            <Link
              to={{
                pathname: `/recipe/${recipe.recipe_id}`,
                state: { recipe: recipe.title }
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

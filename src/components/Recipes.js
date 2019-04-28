import React from "react";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Recipes = props => {
  const { recipes } = props;
  console.log("recipes :", recipes);
  return (
    <div className="mt-4" style={{ columnCount: "2", columnGap: "1em" }}>
      {recipes.map((data, index) => (
        <Card
          style={{
            width: "100%",
            marginBottom: "1em",
            display: "inline-block"
          }}
          key={index}
        >
          <Card.Img
            variant="top"
            src={data.recipe.image}
            alt={data.recipe.label}
          />
          <Card.Body>
            <Card.Title>{data.recipe.label}</Card.Title>
            <Card.Text>{data.recipe.ingredients[0].text}...</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{data.recipe.source}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">View Recipe</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;

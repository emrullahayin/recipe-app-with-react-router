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
        <Card style={{ width: "100%", marginBottom: "1em" }} key={index}>
          <Card.Img
            variant="top"
            src={data.recipe.image}
            alt={data.recipe.label}
          />
          <Card.Body>
            <Card.Title>{data.recipe.label}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{data.recipe.source}</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Recipes;

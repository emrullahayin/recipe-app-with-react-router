import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const containerStyle = {
  textAlign: "center"
};

const SearchForm = props => {
  const { getRecipe } = props;

  return (
    <Container style={containerStyle}>
      <Form onSubmit={getRecipe}>
        <InputGroup className="mt-3">
          <FormControl
            autoComplete="off"
            placeholder=""
            aria-label="Search"
            aria-describedby="basic-addon2"
            name="recipeName"
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </Container>
  );
};

export default SearchForm;

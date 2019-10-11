import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";


const SearchForm = props => {
  const { getRecipe } = props;

  return (
      <Form onSubmit={getRecipe}>
        <InputGroup className="mt-3">
          <FormControl
            placeholder=""
            aria-label="Search"
            aria-describedby="basic-addon2"
            name="recipeName"
            required
          />
          <InputGroup.Append>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
  );
};

export default SearchForm;

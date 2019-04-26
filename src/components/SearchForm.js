import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const SearchForm = props => {
  const { getRecipe } = props;

  return (
    <Container>
      <Row>
        <Col xs={6}>
          <Form>
            <InputGroup className="mt-3">
              <FormControl
                placeholder=""
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary" onClick={getRecipe}>
                  Search
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;

import React, { useState } from "react";
import { Container, Col, Row, Button } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    onSearch(city);
  };
  return (
    <div>
      <Container
        fluid
        className="my-3 search-bx d-inline
      "
      >
        <Row>
          <Col>
            <h3>Weather.App</h3>
          </Col>
          <Col>
            <input
              type="text"
              placeholder="Enter your location ..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </Col>
          <Col>
            <Button onClick={handleSearch}>Search</Button>
          </Col>
          <Col className="d-inline">
            <span className="btn ">°C </span>
            <span className="btn ">°F</span>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SearchBar;

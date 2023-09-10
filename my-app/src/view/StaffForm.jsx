import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const StaffForm = () => {
  const [staffForm, setStaffForm] = useState({ firstName: "", lastName: "" });

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={staffForm.firstName}
              onChange={(e) => {
                setStaffForm(e.target.value);
              }}
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              value={staffForm.lastName}
              onChange={(e) => {
                setStaffForm(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};
export default StaffForm;

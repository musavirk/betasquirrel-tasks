import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const StaffForm = () => {
  const [staffForm, setStaffForm] = useState({ firstName: "" });

  return (
    <Container>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Input
              type="text"
              value={staffForm.firstName}
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

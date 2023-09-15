import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

const AccountsForm = () => {
  const [accountsForm, setAccountsForm] = useState({
    amount: "",
    date: "",
    transactionId: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    setAccountsForm({ ...accountsForm, [e.target.name]: e.target.value });
  };
  return (
    <Container fluid>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label> First Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={accountsForm.firstName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label> Last Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={accountsForm.lastName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="amount">
            <Form.Label> Amount</Form.Label>
            <Form.Control
              type="text"
              name="amount"
              placeholder="enter the amount"
              value={accountsForm.amount}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="date">
            <Form.Label> Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={accountsForm.date}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountsForm;

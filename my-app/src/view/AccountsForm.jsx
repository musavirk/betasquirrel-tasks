import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

const AccountsForm = () => {
  const [accountsForm, setAccountsForm] = useState({
    amount: "",
  });
  return (
    <Container>
      <Row>
        <Col>
          <Form.Group controlId="amount">
            <Form.Label> Amount</Form.Label>
            <Form.Input
              type="text"
              value={accountsForm.amount}
              onChange={(e) => {
                setAccountsForm(e.target.value);
              }}
            />
          </Form.Group>
        </Col>
      </Row>
    </Container>
  );
};

export default AccountsForm;

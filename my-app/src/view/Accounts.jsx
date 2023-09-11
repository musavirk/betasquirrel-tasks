import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col, Modal, Button, Container } from "react-bootstrap";
import AccountsForm from "./AccountsForm";
import * as Icon from "react-bootstrap-icons";
const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  setTimeout(() => {
    setAccounts([
      { amount: "5000", TR_Id: "TR 2323", date: "01/02/2023" },
      { amount: "6000", TR_Id: "TR 4343", date: "08/02/2023" },
      { amount: "4000", TR_Id: "TR 5423", date: "15/02/2023" },
    ]);
  }, 5000);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>Accounts</Modal.Header>
        <Modal.Body>
          <AccountsForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="reset" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      <Main>
        <Row>
          <Container fluid>
            <Row>
              <Col>
                <h2>Accounts</h2>
              </Col>
              <Col className="flex justify-content-end">
                <Button variant="success" onClick={handleShow}>
                  <Icon.Plus className="mx-2" />
                  Update Accounts
                </Button>
              </Col>
            </Row>
          </Container>
          <hr />
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>SI</th>
                  <th>Amount</th>
                  <th>Transaction_Id</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{account.amount}</td>
                    <td>{account.TR_Id}</td>
                    <td>{account.date}</td>
                  </tr>
                ))}
                {accounts.length === 0 ? (
                  <tr>
                    <td colSpan="4">No records fount!</td>
                  </tr>
                ) : null}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Accounts;

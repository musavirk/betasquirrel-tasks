import React, { useState, useEffect } from "react";
import Main from "../layouts/Main";
import { Row, Col, Table, Modal, Button, Container } from "react-bootstrap";
import StaffForm from "./StaffForm";
import * as Icon from "react-bootstrap-icons";
const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetch("http://127.0.0.1:4000/staff")
      .then((res) => res.json())
      .then((data) => setStaffs(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD STAFF</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StaffForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" type="reset" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Main>
        <Row>
          <Container fluid>
            <Row>
              <Col>
                <h2>Staff</h2>
              </Col>
              <Col className="flex justify-content-end">
                <Button variant="success" onClick={handleShow} size="sm">
                  <Icon.Plus className="mx-2" />
                  ADD STAFF
                </Button>
              </Col>
            </Row>
          </Container>
          <hr />
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {staffs.length === 0 ? (
                  <tr>
                    <td colSpan="4">No records fount!</td>
                  </tr>
                ) : (
                  staffs.map((staff, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{staff.name}</td>
                      <td>{staff.email}</td>
                      <td>{staff.phone}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Main>
    </>
  );
};

export default Staff;

// setTimeout(() => {
//   setStaffs([
//     { name: "Sen", email: "sen@gmail.com", contact: "974756777" },
//     { name: "Ram", email: "ram@gmail.com", contact: "978563773" },
//     { name: "Jhone", email: "jhone@gmail.com", contact: "9876355353" },
//   ]);
// }, 5000);

import React, { useState } from "react";
import Main from "../layouts/Main";
import { Row, Col, Table, Modal, Button } from "react-bootstrap";
import StaffForm from "./StaffForm";
const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  setTimeout(() => {
    setStaffs([
      { name: "Sen", email: "sen@gmail.com", contact: "974756777" },
      { name: "Ram", email: "ram@gmail.com", contact: "978563773" },
      { name: "Jhone", email: "jhone@gmail.com", contact: "9876355353" },
    ]);
  }, 5000);
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
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Main>
        <Row>
          <h2>Staff</h2>
          <Col className="flex justify-content-end">
            <Button variant="primary" onClick={handleShow}>
              ADD STAFF
            </Button>
          </Col>
          <hr />
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                </tr>
              </thead>
              <tbody>
                {staffs.map((staff, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{staff.name}</td>
                    <td>{staff.email}</td>
                    <td>{staff.contact}</td>
                  </tr>
                ))}
                {staffs.length === 0 ? (
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

export default Staff;

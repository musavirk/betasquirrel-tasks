import React, { useState } from "react";
import Main from "../layouts/Main";
import { Table, Row, Col, Button, Container, Modal } from "react-bootstrap";
import StudentForm from "./Studentform";

const Student = () => {
  const [students, setStudents] = useState([]);

  setTimeout(() => {
    setStudents([
      {
        firstname: "Ragu",
        lastname: "B",
        email: "ragu@gmail.com",
        contact: "12345678",
      },
      {
        firstname: "Varman",
        lastname: "K",
        email: "varman@gmail.com",
        contact: "12344679",
      },
      {
        firstname: "Jhone",
        lastname: "S",
        email: "jhonr@gmail.com",
        contact: "1245367",
      },
    ]);
  }, 5000);
  console.log(students);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD STUDENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StudentForm />
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
          <Container fluid>
            <Row>
              <Col>
                <h2>Students</h2>
              </Col>
              <Col className="flex justify-content-end">
                <Button variant="primary" onClick={handleShow}>
                  ADD STUDENT
                </Button>
              </Col>
            </Row>
          </Container>
          <hr />
          <Col>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      {student.firstname} {student.lastname}
                    </td>
                    <td>{student.email}</td>
                    <td>{student.contact}</td>
                  </tr>
                ))}
                {students.length === 0 ? (
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

export default Student;
import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

const StudentForm = () => {
  // Set value for form fields
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    mobile: "",
    course: "",
  });
  // set loop for select course
  const [courses] = useState([
    { value: "CSE", name: "Computer Science" },
    { value: "EEE", name: "Electrical" },
    { value: "ECE", name: "Electronics" },
    { value: "Civil", name: "Civil Engineering" },
  ]);
  // set loop for check box
  const [addCourses] = useState([
    { name: "Artificial Intelligence" },
    { name: "Mobile computing" },
    { name: "Data Mining" },
    { name: "Networking" },
  ]);
  return (
    <Form>
      <Container fluid>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="fisrstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={studentForm.firstName}
                onChange={(e) => {
                  setStudentForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={studentForm.lastName}
                onChange={(e) => {
                  setStudentForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                value={studentForm.email}
                onChange={(e) => {
                  setStudentForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="mobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Mobile number"
                value={studentForm.mobile}
                onChange={(e) => {
                  setStudentForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text-area"
                placeholder="Enter Your Address"
                as="textarea"
                rows={3}
                value={studentForm.address}
                onChange={(e) => {
                  setStudentForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="education">
              <Form.Label>Course</Form.Label>
              <Form.Select custom>
                <option>Select</option>
                {courses.map((course) => (
                  <option value={course.value}>{course.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="isHostelOpted" className="mt-2">
              <div>
                <p>Is Hostel Opted:</p>
              </div>
              <Form.Check
                inline
                type="radio"
                label="YES"
                name="radioGroup"
                id="YES"
                value="yes"
              />
              <Form.Check
                inline
                type="radio"
                label="NO"
                name="radioGroup"
                id="NO"
                value="no"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mt-4">
              <Form.Label className="ml-5">
                SELECT ADDITIONAL COURSES:
              </Form.Label>
              {addCourses.map((addCourse) => (
                <Form.Check
                  inline
                  type="checkbox"
                  label={addCourse.name}
                  name="radioGroup"
                  id={addCourse.name}
                  value={addCourse.name}
                />
              ))}
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};

export default StudentForm;

// <Form.Check
// inline
// type="checkbox"
// label="Artificial Intelligence"
// name="radioGroup"
// id="AI"
// value="AI"
// />
// <Form.Check
// inline
// type="checkbox"
// label="Mobile Computing"
// name="radioGroup"
// id="MC"
// value="MC"
// />
// <Form.Check
// inline
// type="checkbox"
// label="Data Mining"
// name="radioGroup"
// id="DM"
// value="DM"
// />
// <Form.Check
// inline
// type="checkbox"
// label="Networking"
// name="radioGroup"
// id="NW"
// value="NW"
// />

{
  /* <Row>
          <Col className="mx-3  my-3 text-end">
            <Button variant="danger" type="reset" className="mx-3">
              Reset
            </Button>
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Col>
        </Row> */
}

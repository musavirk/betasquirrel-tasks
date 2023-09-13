import React, { useState } from "react";
import { Row, Col, Container, Form, Modal, Button } from "react-bootstrap";

const StudentForm = ({ onClose }) => {
  // Set value for form fields
  const [studentForm, setStudentForm] = useState({
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    mobile: "",
    course: "",
    isHostelOpted: true,
    skills: [],
  });

  // set loop for select course
  const [courses] = useState([
    { id: 0, value: "CSE", name: "Computer Science" },
    { id: 1, value: "EEE", name: "Electrical" },
    { id: 2, value: "ECE", name: "Electronics" },
    { id: 3, value: "Civil", name: "Civil Engineering" },
  ]);

  // Handle changes
  const handleChange = (e) => {
    setStudentForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  //  Handle changes for Radio input
  const handleRadio = (e) => {
    setStudentForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: Boolean(Number(e.target.value)),
      };
    });
  };

  // Handle changes for checkbox input
  const handleCheckbox = (value) => {
    if (studentForm.skills.includes(value)) {
      setStudentForm((prevForm) => ({
        ...prevForm,
        skills: prevForm.skills.filter((skill) => skill !== value),
      }));
    } else {
      setStudentForm((prevForm) => ({
        ...prevForm,
        skills: [...prevForm.skills, value],
      }));
    }
  };

  // Submit function
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(studentForm);
  };

  //Return function
  return (
    <Form onSubmit={handleFormSubmit}>
      <Modal.Body>
        <Container fluid>
          <Row>
            {/* First name field */}
            <Col>
              <Form.Group className="mb-3" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={studentForm.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {/* Last name field */}
            <Col>
              <Form.Group className="mb-3" controlId="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Last Name"
                  name="lastName"
                  value={studentForm.lastName}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Email field */}
            <Col>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={studentForm.email}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
            {/* Mobile field */}
            <Col>
              <Form.Group className="mb-3" controlId="mobile">
                <Form.Label>Mobile</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter Mobile number"
                  value={studentForm.mobile}
                  name="mobile"
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Address field */}
            <Col>
              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text-area"
                  placeholder="Enter Your Address"
                  as="textarea"
                  rows={3}
                  name="address"
                  value={studentForm.address}
                  onChange={handleChange}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Select education from drop down */}
            <Col>
              <Form.Group controlId="course">
                <Form.Label>Course</Form.Label>
                <Form.Select custom name="course" onChange={handleChange}>
                  <option>Select</option>
                  {courses.map((course) => (
                    <option
                      value={course.id}
                      name="course"
                      onChange={handleChange}
                      key={course.id}
                    >
                      {course.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>
            {/* Select if hostel facility is needed or not */}
            <Col>
              <Form.Group controlId="isHostelOpted" className="mt-2">
                <div>
                  <p>Is Hostel Opted:</p>
                </div>
                <Form.Check
                  inline
                  type="radio"
                  label="YES"
                  name="isHostelOpted"
                  value={1}
                  onChange={handleRadio}
                  checked={studentForm.isHostelOpted}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="NO"
                  name="isHostelOpted"
                  value={0}
                  onChange={handleRadio}
                  checked={!studentForm.isHostelOpted}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            {/* Select additional course */}
            <Col>
              <Form.Group controlId="skills" className="mt-2">
                <Form.Label>Skills</Form.Label>
                <Form.Check
                  inline
                  type="checkbox"
                  label="HTML 5"
                  name="skills[]"
                  value="HTML 5"
                  onChange={(e) => {
                    handleCheckbox(e.target.value);
                  }}
                  checked={studentForm.skills.find(
                    (skill) => skill === "HTML 5"
                  )}
                />
                <Form.Check
                  inline
                  type="checkbox"
                  label="CSS 3"
                  name="skills[]"
                  value="CSS 3"
                  onChange={(e) => {
                    handleCheckbox(e.target.value);
                  }}
                  checked={studentForm.skills.find(
                    (skill) => skill === "CSS 3"
                  )}
                />
                <Form.Check
                  inline
                  type="checkbox"
                  label="JavaScript"
                  name="skills[]"
                  value="JavaScript"
                  onChange={(e) => {
                    handleCheckbox(e.target.value);
                  }}
                  checked={studentForm.skills.find(
                    (skill) => skill === "JavaScript"
                  )}
                />
                <Form.Check
                  inline
                  type="checkbox"
                  label="PHP"
                  name="skills[]"
                  value="PHP"
                  onChange={(e) => {
                    handleCheckbox(e.target.value);
                  }}
                  checked={studentForm.skills.find((skill) => skill === "PHP")}
                />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" type="reset" onClick={onClose}>
          Close
        </Button>
        <Button variant="success" type="submit" onClick={onClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default StudentForm;

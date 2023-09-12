import React, { useState } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";

const StudentForm = () => {
  // Set value for form fields
  const [studentForm, setStudentForm] = useState({
    firstName: null,
    lastName: null,
    address: null,
    email: null,
    mobile: null,
    course: null,
    isHostelOpted: true,
    additionalCourse: null,
  });
  // set loop for select course
  const [courses] = useState([
    { value: "CSE", name: "Computer Science" },
    { value: "EEE", name: "Electrical" },
    { value: "ECE", name: "Electronics" },
    { value: "Civil", name: "Civil Engineering" },
  ]);

  // Handle changes
  const handleChange = (e) => {
    setStudentForm({ ...studentForm, [e.target.name]: e.target.value });
  };

  const handleRadio = (e) => {
    console.log(Boolean(Number(e.target.value)));
    setStudentForm({
      ...studentForm,
      [e.target.name]: Boolean(Number(e.target.value)),
    });
  };
  //Return function
  return (
    <Form>
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
            <Form.Group controlId="education">
              <Form.Label>Course</Form.Label>
              <Form.Select custom>
                <option>Select</option>
                {courses.map((course) => (
                  <option
                    value={course.value}
                    name="course"
                    onChange={handleChange}
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
            <Form.Group className="mt-4" controlId="additionalCourse">
              <Form.Label className="ml-5">
                SELECT ADDITIONAL COURSES:
              </Form.Label>
              <Form.Check type="checkbox" label="AI" value={"hi"} />
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

//    <Row>
//      <Col className="mx-3  my-3 text-end">
//        <Button variant="danger" type="reset" className="mx-3">
//               Reset
//         </Button>
//          <Button variant="success" type="submit">
//               Submit
//             </Button>
//           </Col>
//         </Row>

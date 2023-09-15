import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const StaffForm = () => {
  const [staffForm, setStaffForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    qualification: "",
    isHostelOpted: true,
    skills: [],
  });

  const [educations] = useState([
    { id: 0, value: "SSLC" },
    { id: 1, value: "PLUS TWO" },
    { id: 2, value: "DEGREE" },
    { id: 3, value: "DIPLOMA" },
    { id: 4, value: "PG" },
    { id: 5, value: "PHD" },
  ]);

  // Function for handle changes
  const handleChanges = (e) => {
    setStaffForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  // Function for handle radio input changes
  const handleRadio = (e) => {
    setStaffForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: Boolean(Number(e.target.value)),
    }));
  };

  // Function for handle Checkbox input
  const handleCheckbox = (e) => {};
  return (
    <Form>
      <Container fluid>
        <Row>
          <Col>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your First Name"
                name="firstName"
                value={staffForm.firstName}
                onChange={handleChanges}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Last Name"
                name="lastName"
                value={staffForm.lastName}
                onChange={handleChanges}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={staffForm.email}
                onChange={handleChanges}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {" "}
          <Col>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                name="phone"
                placeholder="Enter your Phone Number"
                value={staffForm.phone}
                onChange={handleChanges}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="address">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text-area"
                placeholder="Enter Your Address"
                as="textarea"
                name="address"
                rows={3}
                value={staffForm.address}
                onChange={handleChanges}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="qualification">
              <Form.Label>Qualification</Form.Label>
              <Form.Select value={setStaffForm.education} name="education">
                <option>Select</option>
                {educations.map((education) => (
                  <option
                    value={education.value}
                    key={education.id}
                    name={education.value}
                  >
                    {education.value}
                  </option>
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
                name="isHostelOpted"
                value={1}
                checked={staffForm.isHostelOpted}
                onChange={handleRadio}
              />
              <Form.Check
                inline
                type="radio"
                label="NO"
                name="isHostelOpted"
                value={0}
                checked={!staffForm.isHostelOpted}
                onChange={handleRadio}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="skills" className="mt-2">
              <Form.Label>Skills:&nbsp </Form.Label>
              <Form.Check
                inline
                type="checkbox"
                label="HTML 5"
                name="skills[]"
                value="HTML 5"
                onChange={(e) => {
                  handleCheckbox(e.target.value);
                }}
                checked={staffForm.skills.includes("HTML 5")}
              />
              <Form.Check
                inline
                type="checkbox"
                label="CSS 3"
                name="skills[]"
                value="CSS 3"
                // onChange={(e) => {
                //   handleCheckbox(e.target.value);
                // }}
                // checked={studentForm.skills.includes("CSS 3")}
              />
              <Form.Check
                inline
                type="checkbox"
                label="JavaScript"
                name="skills[]"
                value="JavaScript"
                // onChange={(e) => {
                //   handleCheckbox(e.target.value);
                // }}
                // checked={studentForm.skills.includes("JavaScript")}
              />
              <Form.Check
                inline
                type="checkbox"
                label="PHP"
                name="skills[]"
                value="PHP"
                // onChange={(e) => {
                //   handleCheckbox(e.target.value);
                // }}
                // checked={studentForm.skills.includes("PHP")}
              />
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
export default StaffForm;

{
  /* <Form.Check
                inline
                type="checkbox"
                label="Cultural Fest"
                name="radioGroup"
                id="culturalFest"
                value="culturalFest"
              />
              <Form.Check
                inline
                type="checkbox"
                label="IEEE"
                name="radioGroup"
                id="ieee"
                value="ieee"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Physical Education"
                name="radioGroup"
                id="PE"
                value="PE"
              />
              <Form.Check
                inline
                type="checkbox"
                label="Sports"
                name="radioGroup"
                id="sports"
                value="sports"
              /> */
}

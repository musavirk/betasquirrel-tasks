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
  });
  const [educations] = useState([
    { value: "SSLC", name: "SSLC" },
    { value: "Plus Two", name: "PLUS TWO" },
    { value: "Diploma", name: "DIPLOMA" },
    { value: "Degree", name: "DEGREE" },
    { value: "Post Graduation", name: "Post Graduation" },
    { value: "PHD", name: "PHD" },
  ]);

  const handleChanges = (e) => {
    setStaffForm({ ...staffForm, [e.target.name]: e.target.value });
  };

  const handleRadio = (e) => {
    setStaffForm({
      ...staffForm,
      [e.target.name]: Boolean(Number(e.target.value)),
    });
  };
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
                <option>Select from bellow</option>
                {educations.map((education) => (
                  <option value={education.value}>{education.name}</option>
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
        {/* <Row>
          <Col>
            <Form.Group controlId="additionalDuty">
              <Form.Label>Additional Charges:</Form.Label>
              {additionalDuties.map((additionalDuty) => (
                <Form.Check
                  inline
                  type="checkbox"
                  label={additionalDuty.name}
                  name="additionalDuty"
                  id={additionalDuty.name}
                  value={additionalDuty.name}
                />
              ))}
            </Form.Group>
          </Col>
        </Row> */}
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

import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

const StaffForm = () => {
  const [staffForm, setStaffForm] = useState({ firstName: "", lastName: "" });
  const [educations] = useState([
    { value: "SSLC", name: "SSLC" },
    { value: "Plus Two", name: "PLUS TWO" },
    { value: "Diploma", name: "DIPLOMA" },
    { value: "Degree", name: "DEGREE" },
    { value: "Post Graduation", name: "Post Graduation" },
    { value: "PHD", name: "PHD" },
  ]);
  const [additionalDuties] = useState([
    { name: "CUltural Fest" },
    { name: "Sports" },
    { name: "Physical EDucation" },
    { name: "IEEE" },
  ]);
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
                value={staffForm.firstName}
                onChange={(e) => {
                  setStaffForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Last Name"
                value={staffForm.lastName}
                onChange={(e) => {
                  setStaffForm(e.target.value);
                }}
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
                value={staffForm.email}
                onChange={(e) => {
                  setStaffForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your Phone Number"
                value={staffForm.phone}
                onChange={(e) => {
                  setStaffForm(e.target.value);
                }}
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
                rows={3}
                value={staffForm.address}
                onChange={(e) => {
                  setStaffForm(e.target.value);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="qualification">
              <Form.Label>Qualification</Form.Label>
              <Form.Select>
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
            <Form.Group controlId="additionalDuty">
              <Form.Label>Additional Charges:</Form.Label>
              {additionalDuties.map((additionalDuty) => (
                <Form.Check
                  inline
                  type="checkbox"
                  label={additionalDuty.name}
                  name="radioGroup"
                  id={additionalDuty.name}
                  value={additionalDuty.name}
                />
              ))}
             
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </Form>
  );
};
export default StaffForm;












 {/* <Form.Check
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
              /> */}
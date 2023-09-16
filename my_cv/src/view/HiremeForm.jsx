import { Form, Row, Col } from "react-bootstrap";

const Hireme = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group controlId="name">
            <Form.Label>Company Name:</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="phone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control type="tel" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
};

export default Hireme;

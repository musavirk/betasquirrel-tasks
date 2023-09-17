import { useState } from "react";
import Main from "../layout/Main";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import Hireme from "./HiremeForm";

const Index = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {" "}
      <Main>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Hire Me</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Hireme />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
              Close
            </Button>
            <Button variant="success" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
        <Container responsive fluid className="infobx">
          <Row>
            <Col>
              <h2>About</h2>
              <hr />
              <p>
                I am a passionate Full Stack Developer who love to solve
                problems using latest technologies. I thrive on turning ideas
                into practical and efficient solutions by leveraging my
                knowledge in front-end and back-end technologies. As a Full
                Stack Developer, I possess a solid foundation in both front-end
                and back-end development.
              </p>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Education</h2>
              <hr />
              <p>
                COLLEGE OF ENGINEERING ADOOR <br />
                B-TECH 2019 -2023 <br />
                COMPUTER SCIENCE AND ENGINEERING
              </p>
            </Col>
            <Col>
              <h2>Experience</h2>
              <hr />
              <p>
                Full-stack Developer <br />
                betasquirrel <br /> Jan 2023 - Present (9 months)
              </p>
            </Col>
            <hr />
          </Row>
          <Row>
            <h2>Projects</h2>

            <hr />
            <Col>
              {" "}
              <h3> ONE SCHOOL</h3>
              <br />
              <hr />
              <p>
                School management Software Designed Utilized modern technologies
                and frameworks, including database management systems, front
                -end development tools, and security protocols, to ensure
                efficiency, reliability, and data integrity. Successfully
                delivered a robust solution that significantly improved the
                overall management and organization of the school's operations.
              </p>
            </Col>
            <Col>
              <h3>TRAFFIC RULE VIOLATION DETECTION</h3>
              <hr />
              <p>
                Traffic management software Traffic rule violation detection is
                a ML based software for detecting traffic rule violations. In
                this project Used python as the main building block. For Object
                detection YOLOV5 is used. Also number of ML algorithms are used.{" "}
              </p>
            </Col>
            <Col>
              <h3>CANTEEN MANAGEMENT SYSTEM</h3>
              <hr />
              <p>
                Canteen management software Canteen management system is website
                for managing Orders in a canteen. In this project front end is
                created By using HTML,CSS and JavaScript and Back end is
              </p>
            </Col>
            <hr />
          </Row>

          <Container flex-column className="justify-content-center">
            <Row>
              <Col>
                <p>
                  ➢ REST API Development with PHP/Laravel <br />➢ API
                  Development using Node JS
                  <br /> ➢ Implement Different API to React JS
                  <br /> ➢ UX Designing and Prototyping with Figma
                  <br /> ➢ UI Design and Development
                  <br /> ➢ Responsive Designing
                  <br /> ➢ Git Branching and Pull Request Review Workflow <br />
                  ➢ Relational Database Design
                  <br /> ➢ API Documentation using Postman
                  <br /> ➢ Requirement Analysis and Documentation using
                  Confluence
                  <br /> ➢ Sprint Task Management using Agile Principles
                  <br /> ➢ Code Formatting and Standardisation using Prettier
                  <br /> ➢ Static Web Hosting using GitHub Pages
                </p>
              </Col>

              <Col>
                {" "}
                <Button variant="primary" onClick={handleShow}>
                  Hire me
                </Button>
              </Col>
            </Row>
          </Container>
        </Container>
      </Main>
    </>
  );
};

export default Index;

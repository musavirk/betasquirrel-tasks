import Main from "../layout/Main";
import { Container, Row, Col, Button } from "react-bootstrap";
import Hireme from "./HiremeForm";

const Index = () => {
  return (
    <>
      {" "}
      <Main>
        <Container responsive fluid className="infobx">
          <Row>
            <Col>
              <h1>About</h1>
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
              <h1>Education</h1>
              <hr />
              <p>
                COLLEGE OF ENGINEERING ADOOR <br />
                B-TECH 2019 -2023 <br />
                COMPUTER SCIENCE AND ENGINEERING
              </p>
            </Col>
            <Col>
              <h1>Experience</h1>
              <hr />
              <p>
                Full-stack <br />
                betasquirrel <br /> Jan 2023 - Present (9 months)
              </p>
            </Col>
            <hr />
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Row>
            <Col></Col>
          </Row>
          <Container flex-column>
            <Row>
              <Col className="justify-content-center">
                {" "}
                <Button>Hire me</Button>
              </Col>
            </Row>
          </Container>
        </Container>
        <Hireme />
      </Main>
    </>
  );
};

export default Index;

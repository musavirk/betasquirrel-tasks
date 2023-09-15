import Main from "../layout/Main";
import { Container, Row, Col } from "react-bootstrap";

const Index = () => {
  return (
    <>
      {" "}
      <Main>
        <Container>
          <Row>
            <Col>
              <h1>About</h1>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                dicta molestias temporibus enim. Repellat accusamus corporis
                asperiores reprehenderit, vitae dolore eos architecto illo non
                perspiciatis modi, iusto rerum in a. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Reiciendis a nam iste maxime
                minima! Ea doloremque quis culpa voluptate optio magnam debitis!
                Similique sit, dignissimos fuga doloremque quaerat dolor
                excepturi?
              </p>
              <hr />
            </Col>
          </Row>
        </Container>
      </Main>
    </>
  );
};

export default Index;

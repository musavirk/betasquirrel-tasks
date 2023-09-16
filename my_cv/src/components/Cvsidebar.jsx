import {
  Container,
  Row,
  Col,
  Nav,
  Dropdown,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import {
  Envelope,
  Github,
  Linkedin,
  Telephone,
  Tools,
} from "react-bootstrap-icons";
const CvSidebar = () => {
  return (
    <div className="sideBar">
      <Nav className="flex-column">
        <Row>
          <span className="d-none d-md-inline">
            <h2>Contact</h2>
            <hr />
          </span>
          <Nav.Link href="mailto:musavirmusthafa2001@gmail.com">
            <Envelope />
            <span className="d-none d-md-inline ">Email</span>
          </Nav.Link>
          <Nav.Link href="mailto:musavirmusthafa2001@gmail.com">
            <Telephone />
            <span className="d-none d-md-inline ">+91 9747843836</span>
          </Nav.Link>
          <Nav.Link href="https://github.com/musavirk">
            <Github />
            <span className="d-none d-md-inline ">Git</span>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/musavir-k-6a5a46219">
            <Linkedin />
            <span className="d-none d-md-inline ">LinkedIN</span>
          </Nav.Link>
        </Row>
        <hr />
      </Nav>
      <Row>
        <span className="d-none d-md-inline ">
          <h2>Skill</h2>
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Java Script</li>
            <li>PHP</li>
            <li>Python</li>
            <li>Laravel</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>Vue JS</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Java Script</li>
            <li>PHP</li>
            {/* <li>Python</li>
            <li>Laravel</li>
            <li>Node JS</li>
            <li>React JS</li>
            <li>Vue JS</li> */}
          </ul>
        </span>
        <span className=" d-inline d-md-none">
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="success" id="dropdown-split-basic" />
            <Dropdown.Menu>
              <ul>
                <h2>Skills</h2>
                <li>HTML 5</li>
                <li>CSS 3</li>
                <li>Java Script</li>
                <li>PHP</li>
                <li>Python</li>
                <li>Laravel</li>
                <li>Node JS</li>
                <li>React JS</li>
                <li>Vue JS</li>
              </ul>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </Row>
    </div>
  );
};

export default CvSidebar;

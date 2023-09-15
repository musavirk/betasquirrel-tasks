import logo from "../image/profile.jpg";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
const CvNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>
          <b>MUSAVIR K</b> <br />
          Full stack Developer
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Image
            src={logo}
            alt="Profile_pic"
            roundedCircle
            width="60"
            height="60"
          />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default CvNavbar;

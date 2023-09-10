import logo from "../image/logo.png";
import { NavDropdown, Navbar, Nav, Container } from "react-bootstrap";

const AppNavbar = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">
          {" "}
          <img
            alt=""
            src={logo}
            width="30"
            height="20"
            className="d-inline-block align-top"
          />
          Oneschool
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark" />
        <Navbar.Collapse id="navbar-dark" className="justify-content-end">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark"
              title="Musavir"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppNavbar;

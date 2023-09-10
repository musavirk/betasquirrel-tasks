import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faPeopleLine,
  faMoneyBill,
  faBoxesStacked,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/" className="flex-column">
        <NavItem href="/">
          <Nav.Link to="/" as={Link}>
            {" "}
            <FontAwesomeIcon icon={faHouse} />
            <span className="d-none d-md-inline">Dashboard</span>{" "}
          </Nav.Link>
        </NavItem>
        <NavItem href="/student">
          <Nav.Link to="/student" as={Link}>
            <FontAwesomeIcon icon={faUser} />
            <span className="d-none d-md-inline">Student</span>
          </Nav.Link>
        </NavItem>
        <NavItem href="/staff">
          <Nav.Link to="/staff" as={Link}>
            <FontAwesomeIcon icon={faPeopleLine} />
            <span className="d-none d-md-inline">Staff</span>
          </Nav.Link>
        </NavItem>
        <NavItem href="/account">
          <Nav.Link to="/account" as={Link}>
            <FontAwesomeIcon icon={faMoneyBill} />
            <span className="d-none d-md-inline">Accounts</span>
          </Nav.Link>
        </NavItem>
        <NavItem href="/inventory">
          <Nav.Link to="/inventory" as={Link}>
            <FontAwesomeIcon icon={faBoxesStacked} />
            <span className="d-none d-md-inline">Inventory</span>
          </Nav.Link>
        </NavItem>
        <NavItem href="/library">
          <Nav.Link to="/library" as={Link}>
            <FontAwesomeIcon icon={faBook} />
            <span className="d-none d-md-inline">Library</span>
          </Nav.Link>
        </NavItem>
      </Nav>
    </div>
  );
};
export default Sidebar;

import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../logo.svg";
import "../index.css";
const Navigation = () => {
  return (
    <>
      <Navbar bg="black" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              alt=""
              src={Logo}
              width="50"
              height="50"
              style={{ marginRight: 10 }}
              className="d-inline-block align-top"
            />
            {"  "}
          </Navbar.Brand>
          <Nav>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#Experience">Experience</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

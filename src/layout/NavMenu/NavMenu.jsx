import {Container, Navbar, Nav} from "react-bootstrap"
import Contact from "../../layout/Contact"
import { HashLink } from "react-router-hash-link";

export default function NavMenu () {
  

  return (
    <Navbar bg="dark" sticky="top" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand as={HashLink} to="/">Aaron the Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#characteristics">Some More About Me</Nav.Link>
            <Nav.Link as={HashLink} to="#projects">Things I've made</Nav.Link>
            <Nav.Link as={HashLink} to="#skills">Certifications</Nav.Link>
            <Nav.Link as={HashLink} to="#about">About me</Nav.Link>
            <Contact/>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
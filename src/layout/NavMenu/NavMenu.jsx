// export default function NavMenu () {

//   return (
//     <></>
//   )
// }

import {Container, Navbar, Nav} from "react-bootstrap"
import { HashLink } from "react-router-hash-link";

export default function NavMenu () {
  

  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container fluid>
        <Navbar.Brand as={HashLink} to="/">Aaron the Developer</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={HashLink} to="#Header">About Me</Nav.Link>
            <Nav.Link as={HashLink} to="#Characteristics">More About Me</Nav.Link>
            <Nav.Link as={HashLink} to="#Projects">Things I've made</Nav.Link>
            <Nav.Link as={HashLink} to="#Skills">My Skills</Nav.Link>
            <Nav.Link as={HashLink} to="#contact">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
  )
}
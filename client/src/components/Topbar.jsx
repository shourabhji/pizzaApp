import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { MdLocalOffer } from 'react-icons/md';


const Topbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expanded="lg">
        <Container className="text-light" fluid>
          <h6>
            <MdLocalOffer className="text-warning mx-1" /> &nbsp;&nbsp; Free
            home delivery on orders above 500/- Rs{" "}
          </h6>

          <Nav>
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/About">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/ContactUs">
              <Nav.Link>ContactUs</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/Policy">
              <Nav.Link> Terms & Policy </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;

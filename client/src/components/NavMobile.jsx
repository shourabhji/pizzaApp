import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import FaPizzaSlice from "../img/1.png";
import { BsCartFill   } from "react-icons/bs";
import { FaUser   } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import {useSelector} from 'react-redux'

const NavMobile = () => {


  const cartState = useSelector((state) => state.cartItemsReducer);


  return (
    <div className="navmob">
      <Navbar collapseOnSelect expand="lg" sticky="top"  bg="dark" variant="dark">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>
              <img
                src={FaPizzaSlice}
                alt="logo"
                height={"25px"}
                width={"20px"}
                className="mx-2 pb-1 imagefilter"
              />{" "}
              Pizza-Home
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <LinkContainer to={"/"}>
                <Nav.Link className="me-4">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/Pizza's"}>
                <Nav.Link className="me-4">Pizza's</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/About"}>
                <Nav.Link className="me-4">About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/ContactUs"}>
                <Nav.Link>ContactUs</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"/Policy"}>
                <Nav.Link className="me-4">Terms&Policy</Nav.Link>
              </LinkContainer>
             { !localStorage.getItem('authTocken') ? <LinkContainer to={"/Login"}>
                <Nav.Link className="me-4">LogIn</Nav.Link>
              </LinkContainer> : <LinkContainer to={"/accounts"}>
                <Nav.Link>
                  <FaUser />
                </Nav.Link>
              </LinkContainer>}
              <LinkContainer to={"/Cart"}>
                <Nav.Link
                  className={
                    cartState.items.length === 0 ? "me-4" : "me-4 cart-logo"
                  }
                  value={cartState.items.length}
                >
                  <BsCartFill />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMobile;

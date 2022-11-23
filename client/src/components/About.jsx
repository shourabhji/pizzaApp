import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../img/1.png";

const About = () => {
  return (
    <>
      <Container className=" my-4">
        <Row>
          <h1 className="text-center">About</h1>
          <Col md="6" className="my-2">
            This is a Project application. The aim is to make a full stack Mern
            application, Which has all the functionality that is basically
            needed for a Pizza Shop to be work online like, A user interface
            where one can see the Pizzas and change the categories and select
            the pizzas which he want to add to the cart and from the cart one
            can proceed to the payments.
            <ul className="my-2 center">
              <h6>Technology Used</h6>
              <li className="my-3">React.js</li>
              <li className="my-3">Node.js</li>
              <li className="my-3">Express.js</li>
              <li className="my-3">Mongodb</li>
              <li className="my-3">React-Bootstrap</li>
              <li className="my-3">React-Redux</li>
              <li className="my-3">React-Router-Dom</li>
            </ul>
          </Col>
          <Col md="6" className="my-2">
            <img
              alt=""
              src={img}
              height={"100%"}
              width={"100%"}
              className="card"
            />
          </Col>
        </Row>
        <Row>
          <h1 className="text-center">Our Partners</h1>
          <Col md="3" className="row-cols-2">
            <img
              alt=""
              src={img}
              height={"100%"}
              width={"100%"}
              className="card mx-auto"
            />
          </Col>
          <Col md="3" className="row-cols-2">
            <img
              alt=""
              src={img}
              height={"100%"}
              width={"100%"}
              className="card mx-auto"
            />
          </Col>
          <Col md="3" className="row-cols-2">
            <img
              alt=""
              src={img}
              height={"100%"}
              width={"100%"}
              className="card mx-auto"
            />
          </Col>
          <Col md="3" className="row-cols-2">
            <img
              alt=""
              src={img}
              height={"100%"}
              width={"100%"}
              className="card mx-auto"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;

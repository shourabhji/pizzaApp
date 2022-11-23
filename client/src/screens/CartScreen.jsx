import { React, useState, useEffect } from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Cartitems from "../components/Cartitems";

const CartScreen = () => {
  const cartState = useSelector((state) => state.cartItemsReducer);
  const [subTotalAmount, setsubTotalAmount] = useState(0);

  useEffect(() => {
    setsubTotalAmount(() =>
      cartState.items.reduce((accumulator, item) => {
        return (
          parseInt(accumulator) + item.prices[item.varientvalue] * item.quantity
        );
      }, 0)
    );
  }, [cartState, setsubTotalAmount]);

  return (
    <Container>
      {cartState.items.length !== 0 ? (
        <Card className="m-auto my-4 half-w">
          <Card.Header>
            <Card.Title className="text-center">
              SubTotal Amount : {subTotalAmount} /<strong>-</strong>
            </Card.Title>
          </Card.Header>
          <Card.Body style={{ display: "flex" }}>
            <Button className="mx-auto btn-sm btn-success">
              Proceed To Order ( {cartState.items.length} ) Items
            </Button>
          </Card.Body>
        </Card>
      ) : (
        ""
      )}
      <Row>
        <Col md="3"></Col>
        <Col className={cartState.items.length === 0 ? "md-6" : "md-6"}>
          <h2 className="text-center my-2">Pizza's</h2>
          <Container className=" m-auto" style={{ width: "90%" }}>
            {cartState.items.length === 0 ? (
              <h1 className="spinnercenter">Your Cart is empty !</h1>
            ) : (
              cartState.items.map((pizza) => (
                <Cartitems pizza={pizza} key={pizza._id} />
              ))
            )}
          </Container>
        </Col>
        <Col md="3"></Col>
      </Row>
    </Container>
  );
};

export default CartScreen;

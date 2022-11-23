import { React, useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import img1 from "../img/pizza/1.jpg";
// import img3 from "../img/pizza/3.jpg";
// import img4 from "../img/pizza/4.jpg";
// import img5 from "../img/pizza/5.jpg";
import { addToCart } from "../redux/actions/cartAction";



const Pizza = (props) => {


  const dispatch = useDispatch()


  const [varient, setvarient] = useState('small');
  const [price, setprice] = useState(props.pizza.prices.small);


  // for setting quantity

  const [quantity, setquantity] = useState(1);

  // modal for details pizza functions
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setquantity(1);
  }
    const handleShow = () => {
    setShow(true);
    setquantity(1)
  };

  const handleVarient = (e) => {
    let varient = e.target.value;

    if (varient === "small") {
      setprice(props.pizza.prices.small);
      setvarient("small");
    } else if (varient === "medium") {
      setprice(props.pizza.prices.medium);
      setvarient('medium');
    } else if (varient === "large") {
      setprice(props.pizza.prices.large);
      setvarient('large')
    } else {
      setprice(props.pizza.prices.small);
      setvarient('small');
    }
  };
  
  const handleQuantity = (e) => {
    let myquantity = e.target.value;
    setquantity(myquantity);
   
  }

  return (
    <>
      <Card className="my-2 mx-auto p-2">
        <Card.Img
          variant="top"
          src={props.pizza.image}
          className="cursorPtr ratio ratio-16x9 imageseffrct overflow-hidden h-100 w-100"
          onClick={handleShow}
        />
        <Card.Body>
          <Card.Title className="d-flex  justify-content-between">
            <span className="d-inline-block">{props.pizza.name}</span>
            <span className="ms-1 text-left">{props.pizza.category}</span>
          </Card.Title>
          <Card.Text>Price : {price + " /-"} </Card.Text>

          <Button
            variant="primary"
            className="m-1 mt-0 btn-sm btn-success fw-bold"
            onClick={() => dispatch(addToCart(props.pizza, quantity, varient ,price))}
          >
            Add to cart
          </Button>

          <select
            name="catagery"
            id="catagery"
            value={varient}
            className="m-1 cursorPtr btn-primary "
            onChange={(e) => handleVarient(e)}
     
          >
            {props.pizza.varient.map((variant) => {
              return <option key={variant}>{variant}</option>;
            })}
          </select>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex full-w  justify-content-between">
            <span className="d-inline-block">{props.pizza.name}</span>
            <span className="mx-1 text-left">{props.pizza.category}</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card.Img
            variant="top"
            src={props.pizza.image}
            className="cursorPtr ratio ratio-16x9"
          />
        </Modal.Body>
        <Modal.Body>
          <h6>Descreption : </h6>
          {props.pizza.descreption}
        </Modal.Body>
        <Modal.Body>Price : {price * quantity + " /-"} </Modal.Body>
        <Modal.Footer>
          <select
            name="quantity"
            className="m-1  cursorPtr btn-primary"
            onChange={(e) => handleQuantity(e)}
            
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => {
              return <option key={index}>{index}</option>;
            })}
          </select>
          <select
            name="catagery"
            value={varient}
            className="m-1 cursorPtr btn-primary"
            onChange={(e) => handleVarient(e)}
       
          >
            {props.pizza.varient.map((variant) => {
              return <option key={variant}>{variant}</option>;
            })}
          </select>
          <Button
            variant="primary"
            className="btn-sm btn-success fw-bold"
            onClick={() => {
              handleClose();
              dispatch(addToCart(props.pizza, quantity, varient,price));
            }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Pizza;

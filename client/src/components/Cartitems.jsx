import { React } from "react";
import { Card, Button } from "react-bootstrap";
import { addToCart } from "../redux/actions/cartAction";
import { MdDeleteForever } from "react-icons/md";
import { removeFromCart } from "../redux/actions/cartAction";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillMinusCircle } from "react-icons/ai";
// import img3 from "../img/pizza/2.jpg";
import { useDispatch } from "react-redux";

const Cartitems = (props) => {
  const { pizza } = props;
  const dispatch = useDispatch();

  const handleVarient = (e) => {
    let varient = e.target.value;

    dispatch(addToCart(pizza, pizza.quantity, varient));
  };

  return (
    <>
      <Card className="m-2 ">
        <Card.Header>
          <Card.Title className="d-flex full-w  justify-content-between">
            <span className="d-inline-block">{pizza.name}</span>
            <span className="mx-1 text-left">{pizza.category}</span>
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Img
            variant="top"
            src={pizza.image}
            className="cursorPtr ratio ratio-16x9 "
          />
        </Card.Body>
        <Card.Body>
          Price :{" "}
          {pizza.prices[pizza.varientvalue] +
            " X " +
            pizza.quantity +
            " = " +
            pizza.prices[pizza.varientvalue] * pizza.quantity +
            " /-"}
        </Card.Body>
        <Card.Footer
          style={{
            display: "flex",
          }}
        >
          <div className="m-auto">
            <Button
              variant="light"
              onClick={() => {
                dispatch(
                  addToCart(
                    pizza,
                    parseInt(pizza.quantity) - 1,
                    pizza.varientvalue
                  )
                );
              }}
              className={
                pizza.quantity === 1 ? "disabled    btn-sm " : " btn-sm "
              }
            >
              <AiFillMinusCircle className="fs-4 text-success" />
            </Button>
            <span className="mx-1">{pizza.quantity}</span>
            <Button
              variant="light"
              onClick={() => {
                dispatch(
                  addToCart(
                    pizza,
                    parseInt(pizza.quantity) + 1,
                    pizza.varientvalue
                  )
                );
              }}
              className={
                pizza.quantity >= 9 ? "disabled    btn-sm " : " btn-sm "
              }
            >
              <BsPlusCircleFill className="fs-5 text-success" />
            </Button>
          </div>
          <select
            name="catagery"
            value={pizza.varientvalue}
            className="m-auto cursorPtr "
            onChange={(e) => handleVarient(e)}
            style={{ fontSize: "1.3rem" }}
          >
            {pizza.varient.map((variant) => {
              return <option key={variant}>{variant}</option>;
            })}
          </select>
          <Button
            className="m-auto"
            variant="light"
            onClick={() => dispatch(removeFromCart(pizza))}
          >
            <MdDeleteForever className="fs-5 text-danger" />
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Cartitems;

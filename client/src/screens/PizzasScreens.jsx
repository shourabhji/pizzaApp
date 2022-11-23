import { React,memo,useState } from "react";
import { Col, Container, Row, Spinner, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import Pizza from "../components/Pizza";



const PizzasScreens = () => {

  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { loading, error,pizzas } = pizzaState;
  const [Pizzas, setPizzas] = useState(pizzas);
  const [category, setcategory] = useState('All');

    
  const handleCategory = (e) => {
   
      let category = e.target.value;

    if (category === "All") {
      setPizzas(pizzaState.pizzas)
      setcategory('All')
    } else if (category === "veg") {
       setPizzas(pizzaState.pizzas.filter((iteam) => {
          return  iteam.category === "veg"
       }))
      setcategory("veg")
    } else if (category === "non-veg") {
     setPizzas(pizzaState.pizzas.filter((iteam) => {
          return iteam.category === "non-veg"
     }))
      setcategory("non-veg")
    } else {
        setPizzas(pizzaState.pizzas)
    }
   
  }


  const handleSearch = (value) => {
    const regex = RegExp(value)
   setPizzas(pizzaState.pizzas.filter(value => regex.test(value.name)))
  }

  return (
    <>
      {loading ? (
        <div className="spinnercenter text-success">
          <Spinner className="fs-4" animation="border" role="status" />
        </div>
      ) : error ? (
        <h1>error while loading... </h1>
      ) : (
        <>
          <Container>
            <Row>
              <h1 className="text-light text-center my-4">Pizza's</h1>

              <Form className="d-flex mb-4">
                <Form.Control
                  type="search"
                  placeholder="Search For Pizza's  e.g = margarita"
                  className="me-2"
                      aria-label="Search"
                      onChange={(e)=>handleSearch(e.target.value)}
                ></Form.Control>
                <select name="catagery" value={category} className="m-1 cursorPtr btn-primary" onChange={(e)=> handleCategory(e)}  >
                  <option >All</option>
                  <option >veg</option>
                  <option >non-veg</option>
                      
                </select>
              </Form>

              {Pizzas.length === 0 ? (
                <Container>No Pizzas to show</Container>
              ) : (
        Pizzas.map((pizza, index) => {
                  return (
                    <Col md="4" key={index} className="m-auto">
                      <Pizza pizza={pizza} />
                    </Col>
                  );
                })
              )}
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default memo(PizzasScreens);

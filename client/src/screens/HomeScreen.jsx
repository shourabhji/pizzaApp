import { React, useEffect,memo } from "react";
import { Col, Container, Row , Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPizzas } from "../redux/actions/pizzasAction";
import Pizza from "../components/Pizza";
import LandingPage from "../components/LandingPage";
import HomeFooter from "../components/HomeFooter";




const HomeScreen =  () => {
 

  const dispatch = useDispatch();
  const pizzaState = useSelector((state) => state.getAllPizzasReducer);
  const { loading, pizzas, error } = pizzaState; 

  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <div  className="spinnercenter text-success">
          <Spinner className="fs-4" animation="border" role="status" />
        </div>
      ) : error ? (
        <h1>error while loading... </h1>
        ) : (<>
            <LandingPage/>
        <Container>
              <Row>
                <h1 className="text-light text-center my-4">Pizza's</h1>
            {pizzas.length === 0 ? (
              <Container>No Pizzas to show</Container>
                ) :

                  (
              pizzas.map((pizza, index) => {
                return (
                  <Col md="4" key={index} className="m-auto">
                    <Pizza pizza={pizza} />
                  </Col>
                );
              })
            )}
                    
              </Row>
              <HomeFooter />
        </Container></>
      )}
    </>
  );
};

export default HomeScreen;

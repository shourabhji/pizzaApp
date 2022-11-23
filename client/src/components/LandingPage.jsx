import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const LandingPage = () => {

  const nevigate = useNavigate();

   
  return (
    <>
      <div className="landingPage">
        <Container>
          <div className="homeText">
            <h1 className="text-light">Your Pizza,</h1>
            <h1 className="text-light">Your way</h1>
             <Button className="bg-warning btn-lg fw-bolder text-dark my-4" onClick={()=>nevigate("/Pizza's")}>
                  Order Now!
                </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default LandingPage

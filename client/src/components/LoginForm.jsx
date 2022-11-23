import { React, useState, useEffect } from "react";
import { Container, Form, Button, Card,Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { userActionlogin } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';





const LoginForm = (props) => {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.userReducer);
  const navigate = useNavigate()
  const { loading, user } = userState



  useEffect(() => {
    if (localStorage.getItem("authTocken")) {
      navigate('/')
      window.location.reload()
    }
  },);


  const [showPassword, setshowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('formBasicEmail').value;
    const password = document.getElementById('formBasicPassword').value;
    dispatch(userActionlogin(email, password));
  }

  

  return (
    <>
      <Container style={{ padding: " 0 10vw" }}>
        <Card style={{ margin: "10vh auto " }} className="half-w">
          <Card.Header>
            <Card.Title className="text-center">Login Form</Card.Title>
          </Card.Header>
          <Card.Title className="text-center text-danger">{user && user.message ? user.message : ''}</Card.Title>
          <Form>
            <Card.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group
                className="mb-3 cursorPtr"
                controlId="formBasicCheckbox"
              >
                <Form.Check
                  type="checkbox"
                  label="Show Password"
                  onClick={() => setshowPassword(!showPassword)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Text className="text-muted">
                  Don't have an account ? Try{" "}
                  <span
                    className=" text-success fw-bold cursorPtr "
                    onClick={() => props.toggler(true)}
                  >
                    Register
                  </span>
                </Form.Text>
              </Form.Group>
            </Card.Body>
            <Card.Footer className="d-flex">
              <Button className="m-auto" variant="success" type="submit" onClick={handleSubmit}>
                {loading ? <Spinner animation="border" role="status" /> :
                  "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export default LoginForm;

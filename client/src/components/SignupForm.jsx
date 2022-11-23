import { React, useState,useEffect } from 'react';
import { Container, Form, Button, Card, Spinner } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { userActionsignup } from '../redux/actions/userAction';
import { useNavigate } from 'react-router-dom';
const SignupForm = (props) => {


  const userState = useSelector((state) => state.userReducer);
  
  const { loading, user } = userState;
    const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("authTocken")) {
      navigate('/')
      window.location.reload()
    }
  },);

  const [showPassword, setshowPassword] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById("formBasicEmail").value;
    const password = document.getElementById("formBasicPassword").value;
    const UserName = document.getElementById("formBasicText").value;
    const confirmPassword = document.getElementById("formConfirmPassword").value;
    if (password !== confirmPassword) {
      return alert("password dosen't match")
    }
   dispatch(userActionsignup(UserName, email, password));
  };

  return (
    <>
      <Container style={{ padding: " 0 10vw" }}>
        <Card style={{ margin: "10vh auto" }} className="half-w">
          <Card.Header>
            <Card.Title className="text-center">Signup Form</Card.Title>
          </Card.Header>
        
            <Card.Title className="text-center text-danger">{user&&user.message ?user.message:'' }</Card.Title>
 

          <Form>
            <Card.Body>
              <Form.Group className="mb-3 " controlId="formBasicText">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="Enter user Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>
               

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password" minLength={4}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formConfirmPassword">
                <Form.Label>Confirm-Password</Form.Label>
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm-Password" minLength={4}
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
                  Already have an account ? Try{" "}
                  <span
                    className=" text-success fw-bold  cursorPtr"
                    onClick={() => props.toggler(false)}
                  >
                    Login
                  </span>
                </Form.Text>
              </Form.Group>
            </Card.Body>
            <Card.Footer className="d-flex">
              <Button
                className="m-auto"
                variant="success"
                type="submit"
                onClick={handleSubmit}
              >
                {loading ? <Spinner  animation="border" role="status" /> :
                  "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default SignupForm

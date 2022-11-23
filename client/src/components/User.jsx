import React from 'react'
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const User = (props) => {
  const {User} = props
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authTocken")
    navigate('/')
    window.location.reload()
  }
  return (
    <>
      <Container className='my-2'>

        <Card>
          <Card.Header>
            name: {User.name}
          </Card.Header>
          <Card.Body>
            email : {User.email}
          </Card.Body>
          <Card.Footer>
            <Button onClick={handleLogout} >
              Logout
            </Button>
          </Card.Footer>
        </Card>

      </Container>
    </>
  )
}

export default User

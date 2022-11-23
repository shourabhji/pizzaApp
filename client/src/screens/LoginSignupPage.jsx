import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

 
const LoginSignupPage = () => {

    const [formToggler, setformToggler] = useState(false);

    const handleToggle = ( value ) => {
      setformToggler(value)
  }
 
  return (
    <>
     {
      formToggler ? (
        <SignupForm toggler={handleToggle} />
      ) : (
        <LoginForm toggler={handleToggle} />
      )}
    </>
  );
}

export default LoginSignupPage

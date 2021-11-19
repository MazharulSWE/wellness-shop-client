import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import "./Register.css"

const Register = () => {
  const [userRegister, setUserRegister] = useState({});
  const { registerUser, user, isLoading, error } = useAuth();
  console.log(user);

  const history = useHistory();

  const registerInput = (e) => {
    // console.log(e.target.value);
    const name = e.target.name;
    const fieldValue = e.target.value;

    const signInUser = { ...userRegister };
    signInUser[name] = fieldValue;
    setUserRegister(signInUser);
  };

  // console.log(userRegister);
  const registration = (e) => {
    e.preventDefault();
    // console.log(userRegister);
    if (userRegister.password !== userRegister.password2) {
      alert("password not matched");
      return;
    }
    registerUser(
      userRegister.email,
      userRegister.password,
      userRegister.displayName,
      history
    );
    // setUserRegister({})
    setUserRegister({});
  };
  

  

  return (
    <div className="register-section">
      <div className="row">
        <div className="col-md-5 col-sm-12 col-12">
          <div className="register-input">
          <h3>Please Register</h3>
          <h6 className="text-danger">
            <b>{error}</b>
          </h6>
          {!isLoading && (
            <form onSubmit={registration} action="">
              <input
              placeholder="Enter Your Name"
                required
                onBlur={registerInput}
                type="text"
                name="displayName"
                id=""
              />
              <br />
              <input
               placeholder="Enter Your Email"
                required
                name="email"
                type="email"
                onBlur={registerInput}
              />
              <br />
              <input
               placeholder="Type Your Password"
                required
                onBlur={registerInput}
                type="password"
                name="password"
                id=""
              />
              <br />
              <input
              placeholder="Re-Type Your Password"
                required
                onBlur={registerInput}
                type="password"
                name="password2"
                id=""
              />
              <br />
              <input className="register-submit" type="submit" value="Register" />
            </form>
          )}
          {isLoading && <Spinner animation="border" variant="info" />}
            
            ----------------------


           <h5>Already Registered?</h5>
           <Link className="regLink" to="/login"><h3><b>Click Here for LOGIN</b></h3></Link>

          
          </div>
        </div>
        <div className="col-md-5 col-sm-12 col-12">

        </div>
      </div>
    </div>
  );
};

export default Register;





/*
import React, { useState } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Register.css';

const Register = () => {
    const [loginData,setLoginData] = useState({});
    const history = useHistory();
    const {user,registerUser,isLoading, authError} = useAuth();
    

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
        // console.log(newLoginData);
    }
    const handleLoginSubmit = e =>{
        if (loginData.password !==loginData.password2) {
            alert("Your password did't match")
            return
        }
        registerUser(loginData.email, loginData.password,loginData.name, history);
        e.preventDefault();
    }
    return (
        <div className="login-page">
        <h1>Please Register</h1>
        { !isLoading && <Form onSubmit={handleLoginSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Control className="mb-3" name="name" onBlur={handleOnBlur} placeholder="Your Name" />
              <Form.Control type="email" name="email" onBlur={handleOnBlur} placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Control type="password" name="password" onBlur={handleOnBlur} placeholder="Password" />
              <Form.Control className="mt-3" type="password" name="password2" onBlur={handleOnBlur} placeholder="Confirm Password" />
              <Button className="mt-3 px-5" type="submit" variant="warning">Register</Button>
              <NavLink to="/login">
                <Button style={{textDecoration:"none", color:"orange"}} variant="link">Already Registered? Please Login</Button>
              </NavLink>
          </Form.Group>
     </Form>}
     {isLoading && <Spinner animation="border" variant="dark" />}
     {user?.email && ['primary',].map((primary, idx) => (
     <Alert key={idx} variant={primary}>User Created Successfully😀!</Alert>))}
     {authError && ['danger',].map((danger, idx) => (
     <Alert key={idx} variant={danger}>{authError}</Alert>))}
 </div>
    );
};

export default Register;
*/
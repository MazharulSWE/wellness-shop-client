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
import React, { useState, } from 'react';
import { Alert, Button, Form, Spinner } from 'react-bootstrap';
import { NavLink,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const [loginData,setLoginData] = useState({});
    const {user,loginUser,signInWithGoogle,isLoading,authError}= useAuth();
    // redirect user to the page where he wants to go after login
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field]=value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        loginUser(loginData.email, loginData.password,location,history);
        e.preventDefault();
    }
    // google sign in
     const handleGoogleSignIn = () =>{
       signInWithGoogle(location,history);
     };
    return (
        <div className="login-page">
          <h1>Please Login</h1>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control type="password" name="email" onChange={handleOnChange} placeholder="Password" />
                <Button className="mt-3 px-5" type="submit" variant="warning">Login</Button>
                <NavLink to="/register">
                  <Button style={{textDecoration:"none", color:"orange"}} variant="link">New User? Please Register</Button>
                </NavLink>
            </Form.Group>
                {isLoading && <Spinner animation="border" variant="dark" />}
                {user?.email && ['primary',].map((primary, idx) => (
                <Alert key={idx} variant={primary}>Login Successfully😀!</Alert>))}
                {authError && ['danger',].map((danger, idx) => (
                <Alert key={idx} variant={danger}>{authError}</Alert>))}
         </Form>
         <p>**********or***********</p>
         <Button onClick={handleGoogleSignIn} className="mt-3 px-5" type="submit" variant="primary">Google Sign In</Button>

   </div>
    );
};

export default Login;
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";
import logo from '../../../images/logo.png';
import { Link, NavLink } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

import "./Header.css";

const Header = () => {
  const { user, logout } = useAuth();
  const history = useHistory();
  const goToHome = () => {
    history.push("/home");
  };
  // const headerLoginButton=()=>{

  // }
  return (
    <div>
      <div className="text-center">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
          className="text-center"
        >
          <Container>
          <img style={{width: "300px"}} src={logo} alt="" />
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="m-auto">
                <Navbar.Brand>

                  <NavLink
                     to="/home"
                    activeStyle={{
                      color: "black",
                    }}
                   
                    className="header-link"
                  >
                    <b>Home</b>
                  </NavLink>
                </Navbar.Brand>


                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/explore"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    
                    className="header-link"
                  >
                   <b>Explore</b>
                  </NavLink>
                </Navbar.Brand>


                <Navbar.Brand>
                  {""}
                  <NavLink
                    to="/dashboard"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    
                    className="header-link"
                  >
                    {user.email&&<b>Dashboard</b>}
                  </NavLink>
                </Navbar.Brand>

                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/contact"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}
                    
                    className="header-link"
                  >
                    <b>Contact Us</b>
                  </NavLink>
                </Navbar.Brand>
               
                <Navbar.Brand>
                  {" "}
                  <NavLink
                    to="/about"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "black",
                    }}              
                    className="header-link"
                  >
                    <b>About Us</b>
                  </NavLink>
                </Navbar.Brand>
              </Nav>
            </Navbar.Collapse>
            {user.email && (
              <img className="header-img" src={user.photoURL} alt="" />
            )}
            {user.email && (
              <span className="text-dark mx-1">{user?.displayName}</span>
            )}
            {user.email ? (
              <button onClick={logout} className="btn btn-dark">
                Logout
              </button>
            ) : (
              <Link to="/login">
                <button className="btn btn-success">Login</button>
              </Link>
            )}
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;






/*



import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo.png';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logout} = useAuth();
      return (
          <>
          <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg"> 
            <Container>
               <Navbar.Brand  href="#home"><img className="image-style" src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle />
                  <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as ={HashLink} className="style-nav" to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} className="style-nav" to="/explores">More Products</Nav.Link>
                    {
                      user?.email?
                    <Nav.Link as ={HashLink} className="style-nav" to="/add">Add Products</Nav.Link>:
                    <Nav.Link as ={HashLink} className="style-nav" to="/login"></Nav.Link>
                    }
                    {
                      user?.email?
                    <Nav.Link as ={HashLink} className="style-nav" to="/addReview">Add Review</Nav.Link>:
                    <Nav.Link as ={HashLink} className="style-nav" to="/login"></Nav.Link>
                    }
                    {
                      user?.email?
                    <Nav.Link as ={HashLink} className="style-nav" to="/myOrder">My Orders</Nav.Link>:
                    <Nav.Link as ={HashLink} className="style-nav" to="/login"></Nav.Link>
                    }
                    {
                      user?.email?
                    <Nav.Link as ={HashLink} className="style-nav" to="/manageOrder">Manage Order</Nav.Link>:
                    <Nav.Link as ={HashLink} className="style-nav" to="/login"></Nav.Link>
                    }
                    <Nav.Link as ={HashLink} className="style-nav" to="/about">About</Nav.Link>
                    <Nav.Link as ={HashLink} className="style-nav" to="/contact">Contact</Nav.Link>
                    {
                      user?.email?
                      <Button onClick={logout} variant="light" className="style-nav" >Logout</Button>:
                      <Nav.Link as ={HashLink} className="style-nav" to="/login">Login</Nav.Link>
                    } 
                    <Navbar.Text>Signed in as: <a href="#login">{user?.displayName}</a></Navbar.Text>
                </Navbar.Collapse>
           </Container>
         </Navbar>
       </>
      );
  };
  

export default Header;

*/
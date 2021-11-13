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






/*
const Header = () => {
    const {user,logout} = useAuth();
    return (
    <>
        <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="" className="image-style"/></Navbar.Brand>
                <Nav className="me-auto nav-text">
                    <Nav.Link as ={HashLink} className="style-nav" to="/home#home">Home</Nav.Link>
                    <Nav.Link as ={HashLink} className="style-nav" to="/explores">More Products</Nav.Link>
                    <Nav.Link as ={HashLink} className="style-nav" to="/add">Add Products</Nav.Link>
                    <Nav.Link as ={HashLink} className="style-nav" to="/addReview">Add Review</Nav.Link>
                    {
                        user?.email?
                        <Button onClick={logout} variant="light" className="style-nav" >Logout</Button>
                        :
                        <Nav.Link as ={HashLink} className="style-nav" to="/login">Login</Nav.Link>

                    }
                </Nav>
            </Container>
        </Navbar>
    </>
    );
};
*/
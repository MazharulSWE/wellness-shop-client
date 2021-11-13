import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = () => {
    const [details, setDetails] = useState([]);
    const {productId} = useParams();
    const {isLoading,user} = useAuth();
    const nameRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();
    
  // newly add    
  const sendData = (send)=>{
      send.preventDefault();
      const name= nameRef.current.value;
      const email= emailRef.current.value;
      const address= addressRef.current.value;
      const allData = {
          name:name, 
          email:email,
          address:address
         
      }

      console.log(allData);
      axios.post("http://localhost:5000/orders",allData)
      .then(res =>{
        console.log(res);
     })
      
          
    //   }
     
    //   nameRef.current.value="";
    //   emailRef.current.value="";
      addressRef.current.value="";
  }

  

   useEffect(()=>{
       fetch('http://localhost:5000/products')
       .then(res=> res.json())
       .then(data =>setDetails(data))
   },[]);

   const findDetail = details.find((detail)=> detail._id == productId);
   console.log(findDetail);
   if (isLoading) {
       return <Spinner animation="border" variant="dark" />
   }
    return (
       <div className="d-flex booking">
         <div className="service pb-3 m-5">
            <img src={findDetail?.img} alt="" />
            <h1>{findDetail?.name}</h1>
            <h3>${findDetail?.price}</h3>
            <p>{findDetail?.description}</p>
        </div>
        <div className="table">
            <h1>Place Your Order</h1>
            <form onClick={sendData} action="">
            <input type="text"  placeholder="Name" ref={nameRef} value={user.displayName}/>
            <br />
            <input type="text"  placeholder="Email" ref={emailRef} value={user.email}/>
            <br />
            <input type="text"  placeholder="Address" ref={addressRef}/>
            <br />
            <input type="submit" value="Send" />
            </form>
        </div>
       </div>
    );
};

export default Booking;
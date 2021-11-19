import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import axios from "axios";
import "./Purchase.css";
import { Alert } from "react-bootstrap";
import useAuth from '../../hooks/useAuth';
import Swal from "sweetalert2";

const Purchase = () => {
  //receive data from useAuth
  const { user } = useAuth();

  const { email, displayName } = user;

  const { register, handleSubmit, reset } = useForm();
  const [purchaseProduct, setPurchaseProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`https://morning-eyrie-93003.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setPurchaseProduct(data));
  }, []);
  const { _id,img,name,price,description} = purchaseProduct;

  const onSubmit = (data) => {
    const date = new Date();
    const localDate = date.toLocaleDateString();
    data.orderDate = localDate;
    data.status = "pending";

    // setIsConfirm(true)
    axios
      .post("https://morning-eyrie-93003.herokuapp.com/order", data)
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          //     <Alert  variant="success">
          //     This is a  alert—check it out!
          //   </Alert>
          // alert("order place successfully")
          Swal.fire("order place successfully");
          reset();
        }
      });

    console.log(data);
  };

  return (
    <div className="purchase">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12">
          <div className="prodDetail">
            <img src={img} alt=""></img>
            <h3>{_id}</h3>
             <h2>{name}</h2>
            <h5>
              <b>Price: $ {price}</b>
            </h5>
            <p className="detail">
              <b>{description}</b>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 purchase-form">
          <h2>Fill form and purchase</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              value={displayName}
              required
              placeholder="enter your name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              value={email}
              required
              placeholder="enter your email"
              {...register("email")}
            />
            <input
              required
              placeholder="enter your address"
              {...register("address")}
            />
            <input
              required
              placeholder="enter your contact number"
              type="number"
              {...register("phone")}
            />
           
            <input
              required
              placeholder="enter advance amount"
              type="number"
              {...register("charge")}
            />
            <br />

            <input className="bg-primary" type="submit" value="Order" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

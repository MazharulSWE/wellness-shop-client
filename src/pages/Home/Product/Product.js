import React from 'react';
import { useHistory } from 'react-router';
import './Product.css';

const Product = ({product}) => {
    const {_id,img,name,price,description} = product;
    const history = useHistory();
    const purchase=()=>{
        history.push(`/purchase/${_id}`)
        }
    return (
        <div className="product pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <button onClick={purchase}>Purchase 🚗</button>
        </div>
    );
};

export default Product;
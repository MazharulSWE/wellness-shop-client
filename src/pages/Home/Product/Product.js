import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id,img,name,price,description} = product;
    return (
        <div className="product pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <Link to={`/details/${_id}`}>
            <button>Purchase🛒</button>
            </Link>
        </div>
    );
};

export default Product;
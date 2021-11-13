import React from 'react';
import { Link } from 'react-router-dom';
import './Explore.css';

const Explore = ({explore}) => {
    const {_id,img,name,price,description} = explore;
    return (
        <div className="explore pb-3">
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

export default Explore;
import React from 'react';
import './Explore.css';

const Explore = ({explore}) => {
    const {_id,img,name,price,description} = explore;
    return (
        <div className="explore pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <button>Purchase🛒</button>
        </div>
    );
};

export default Explore;
import React from 'react';
import './Review.css';

const Review = ({review}) => {
    const {img,name,rating,description} = review;
   
    return (
        <div className="review pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Rating: {rating}⭐</h5>
            <p>{description}</p>
        </div>
    );
};

export default Review;
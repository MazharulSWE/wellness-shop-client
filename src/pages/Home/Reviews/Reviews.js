import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews,setReviews] = useState([]);
    useEffect(()=>{
        fetch("https://morning-eyrie-93003.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
     },[]);
    return (
        <div id="review" className="pds">
            <h1>Happy Customer Say</h1>
            <p>We listen to all of our customers carefully</p>
            <div className="reviews-container">
               {
                   reviews.map(review=> <Review
                   key={review.id}
                   review={review}
                   ></Review> )
               }
            </div>
        </div>
    );
};

export default Reviews;
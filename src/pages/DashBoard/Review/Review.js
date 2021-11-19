import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import  useAuth  from '../../../hooks/useAuth';
import "./Review.css"



const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const {user}=useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post("https://morning-eyrie-93003.herokuapp.com/reviews", data)
        .then(res =>{
        //    console.log(res);
        if (res.data.insertedId) {
            alert('added successfully')
            reset();
        }
        })
    };
//     const {user}=useAuth()
// const [rating,setRating]=useState(1)
// const [userComment,setUserComment]=useState("")

// //Comment Field
// const comments=(e)=>{
//     setUserComment(e.target.value)
// }

// const ratingOne=()=>{
//     setRating(1)
// }
// const ratingTwo=()=>{
//     setRating(2)
// }
// const ratingThree=()=>{
//     setRating(3)
// }
// const ratingFour=()=>{
//     setRating(4)
// }
// const ratingFive=()=>{
//     setRating(5)
// }
// console.log(rating);


//     const reviewForm=()=>{
//         // e.preventDefault()
//       const commentObject = {name:user.displayName, email:user.email,cmnt:userComment,rating:rating}
//       console.log(commentObject)
//       axios.post("https://morning-eyrie-93003.herokuapp.com/reviews", commentObject).then((res) => {
//         console.log(res.status);
//         if (res.status === 200) {
//             setUserComment("")
//           Swal.fire('Your Review Submitted')
          
//         }
//       });
//     }
    return (
        <div id="/addReview" className="add-review">
        <h1>Add You Feedback</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name")} placeholder="Name"/>
           <input type="number" {...register("rating")} placeholder="Rating(1-5)" />
           <textarea {...register("description")} placeholder="Description"/>
           <input {...register("img")} placeholder="image url"/>
           <input type="submit" />
      </form>
    </div>
        // <div className="review">
        //     <h3 >Here write your review </h3>
           
        //     <textarea required placeholder="Please Share Your Valuable Review" onBlur={comments} name="" id="" cols="15" rows="5"></textarea>
        //     <br/>
        //     <button onClick={ratingOne} className="reviewBtn">1</button>
        //     <button onClick={ratingTwo}  className="reviewBtn">2</button>
        //     <button onClick={ratingThree} className="reviewBtn">3</button>
        //     <button onClick={ratingFour} className="reviewBtn">4</button>
        //     <button onClick={ratingFive} className="reviewBtn">5</button>
        //     <br/>
        //     <button className="reviewSubmit" onClick={reviewForm}>Review</button>
            
        // </div>
    );
};

export default Review;
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/reviews', data)
        .then(res =>{
        //    console.log(res);
        if (res.data.insertedId) {
            alert('added successfully')
            reset();
        }
        })
    };
    return (
        <div id="/addReview" className="add-review">
        <h1>Add You Feedback</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
           <input {...register("name")} placeholder="Name"/>
           <input type="number" {...register("price")} placeholder="Rating(1-5)" />
           <textarea {...register("description")} placeholder="Description"/>
           <input {...register("img")} placeholder="image url"/>
           <input type="submit" />
      </form>
    </div>
    );
};

export default AddReview;
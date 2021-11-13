// import { Axios } from 'axios';
import axios from 'axios'
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddCar.css';

const AddCar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
        .then(res =>{
        //    console.log(res);
        if (res.data.insertedId) {
            alert('added successfully')
            reset();
        }
        })
    };
    return (
       // this form is from react hook form
       <div id="/add" className="add-car">
       <h1>Add a Brand New Car</h1>
       <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("name")} placeholder="Name"/>
          <input type="number" {...register("price")} placeholder="price" />
          <textarea {...register("description")} placeholder="Description"/>
          <input {...register("img")} placeholder="image url"/>
          <input type="submit" />
     </form>
   </div>
);
};

export default AddCar;
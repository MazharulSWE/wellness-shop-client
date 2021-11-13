import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img style={{width:"40%"}} src="https://i.ibb.co/d4XLQh9/404-removebg-preview.png" alt="" />
            <div className="text-center">
            <Link to="/"><Button className="outline-warning btn btn-warning px-5 text-white">Go Back</Button></Link>
            </div> 
        </div>
    );
};

export default NotFound;
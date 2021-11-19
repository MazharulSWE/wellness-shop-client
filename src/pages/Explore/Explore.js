import React from 'react';
import { useHistory, useParams } from 'react-router';
import './Explore.css';

const Explore = ({explore}) => {
    const {_id,img,name,price,description} = explore;
    const {id}=useParams();
    
    const history = useHistory(); 

    const purchase = ()=>{
        history.push(`/purchase/${_id}`)
    }
    return (
        <div className="explore pb-3">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h3>$ {price}</h3>
            <p>{description}</p>
            <button onClick={purchase}>Purchase🏎️</button>
            
        </div>
    );
};

export default Explore;
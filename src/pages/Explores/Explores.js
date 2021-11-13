import React, { useEffect, useState } from 'react';
import Explore from '../Explore/Explore';
import './Explores.css';

const Explores = () => {
    const [explores,setExplores] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>setExplores(data))
     },[]);
    
    return (
        <div id="explores" className="pds">
            <h1>Explore Our More Products</h1>
            <p>we are always provide our customer best quality products</p>
            <div className="explores-container">
               {
                   explores.map(explore=> <Explore
                   key={explore.id}
                   explore={explore}
                   ></Explore> )
               }
            </div>
        </div>
    );
};

export default Explores;
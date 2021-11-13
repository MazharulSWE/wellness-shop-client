import React, { useEffect, useState } from 'react';
import './Products.css';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data=>{
        const slicedData = data.slice(0,6)
        setProducts(slicedData)})
     },[]);
    
    return (
        <div id="products" className="pds">
            <h1>Best Seller Cars</h1>
            <p>we're proud to represent the world's most prestigious car brands at over 140 dealerships nationwide</p>
            <div className="products-container">
               {
                   products.map(product=> <Product
                   key={product.id}
                   product={product}
                   ></Product> )
               }
            </div>
        </div>
    );
};

export default Products;
import { reload } from '@firebase/auth';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = ({product}) => {
    const {_id,img,name,price,description} = product;

const removeProduct=()=>{
    const confirm= window.confirm("Are you sure,You want to Delete this product? ")
    // console.log("remove now",_id)
    if (confirm){
        fetch(`https://morning-eyrie-93003.herokuapp.com/products/${_id}`,{method:"delete"})
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.deletedCount){
        window.location.reload();
    }
    })
    }
    
}
    return (
        <div>
                   <Col >
        <Card className="m-2">
          <Card.Img className="purchase-img" variant="top" src={img} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>{name}</h1>
            </Card.Title>
            <h6><b>Price:{price}</b></h6>
            <Card.Text>
              <p>{description}</p>
            </Card.Text>
          </Card.Body>
          
          <button className="remove-product" onClick={removeProduct}><b>Remove This Product</b></button>
        </Card>
      </Col>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import './ManageOrder.css';

const ManageOrder = () => {
        const [manageOrder, setManageOrder] = useState([]);
        useEffect(()=>{
            fetch('https://morning-eyrie-93003.herokuapp.com/order')
            .then(res=>res.json())
            .then(data=>setManageOrder(data))
        
        },[])
        
        console.log(manageOrder);

        const removeThisOrder = (e) =>{
            const confirm = window.confirm("Wanna Delete this Order?")
            if (confirm) {
                fetch(`https://morning-eyrie-93003.herokuapp.com/order/${e}`,{
                    method: "delete"
                })
                .then(res=>res.json())
                .then(data=>{
                    const remainingOrder = manageOrder.filter(rem=>rem._id!=e)
                    setManageOrder(remainingOrder)
                })
            }
        }
    return (
        <div id="myorders">
            <h2>manage All Orders</h2>
            <div className="my-order">
                {manageOrder.map((orderInfo)=>(
                    <div className="mine-order" key={orderInfo._id}>
                        <div>
                            <h2>Name:{orderInfo?.service?.name}</h2>
                            <h2>Email:{orderInfo?.service?.email}</h2>
                            <h2>Address:{orderInfo?.service?.address}</h2>
                            <button onClick={()=>removeThisOrder(orderInfo._id)} className="btn btn-warning">Remove</button>
                        </div>

                    </div>

                ))

                }

            </div>
        </div>
    );
};

export default ManageOrder;
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrder.css';

const MyOrder = () => {
    const [myOrder, setMyOrder ] = useState([]);
    const {user} = useAuth();
    const email = user.email;
    useEffect(()=>{
        fetch('https://morning-eyrie-93003.herokuapp.com/order')
        .then((res) => res.json())
        .then((data) => setMyOrder(data));
    },[]);

    const onlyMyOrder = myOrder.filter(own=>own.service.email == email)
    console.log(myOrder);
    //Remove order
    const ownOrderRemove = (event)=>{
        const confirmation = window.confirm("Are you sure delete this order")
        if (confirmation) {
            fetch(`https://morning-eyrie-93003.herokuapp.com/order/${event}`,{
                method: "delete"
            })
            .then(res =>res.json())
            .then(data=>{
                if (data.deleteCount) {
                    const remainingOrder = onlyMyOrder.filter(rest=>rest._id!=event)
                    setMyOrder(remainingOrder);
                }
            })
        }
    }
    console.log(myOrder);
    return (
        <div id="myorders">
            <h2>All orders are here</h2>
            <div className="my-order">
                {onlyMyOrder.map((orderInfo)=>(
                    <div className="mine-order" key={orderInfo._id}>
                        <div>
                            <h2>Name:{orderInfo?.service?.name}</h2>
                            <h2>Email:{orderInfo?.service?.email}</h2>
                            <h2>Address:{orderInfo?.service?.address}</h2>
                            <button onClick={()=>ownOrderRemove(orderInfo._id)} className="btn btn-warning">Remove</button>
                        </div>

                    </div>

                ))

                }

            </div>
        </div>
    );
};

export default MyOrder;
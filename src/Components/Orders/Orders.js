import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Orders.css';

const Orders = () => {
    const [orderList, setOrderList] = useState([]);
    const [loggedInInfo, setLoggedInInfo] = useContext(UserContext);

    useEffect(()=>{
        fetch('https://apple-tart-88350.herokuapp.com/specificOrder?email='+loggedInInfo.email)
        .then(res => res.json())
        .then(data => setOrderList(data))
    },[loggedInInfo.email])

    const priceNumber = orderList.reduce((total,value)=>{
        const priceNumber = Number(value.productPrice);
        return total + priceNumber;
    },0)

    return (
        <div className='order'>
            <h1>This is Orders</h1>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    orderList.map(order => <tr>
                        <td>{order.productName}</td>
                        <td>1</td>
                        <td>${order.productPrice}</td>
                    </tr>)
                }
                <tr>
                    <td colSpan="2" className='total'>Total</td>
                    <td>${priceNumber}</td>
                </tr>
                </tbody>
            </table>
            <button className='check-out-btn'>Check Out</button>
            
        </div>
    );
};

export default Orders;
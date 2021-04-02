import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './Home.css';

const Card = (props) => {
    const [loggedInInfo, setLoggedInInfo] = useContext(UserContext);
    const {productName, productPrice} =props.boxes;
    const handleCheck = (product) => {
        if(loggedInInfo.email){
            const {productName, productPrice} = product;
            const {displayName,email} =loggedInInfo; 
            const orderCheckOut ={
                name: displayName,
                email: email,
                productName: productName,
                productPrice: productPrice,
            }
            fetch('https://apple-tart-88350.herokuapp.com/orders',{
                method:'POST',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderCheckOut)
            })
            .then(res => console.log())
            .catch(err => console.log(err))
            alert('Product is Added. Please CheckOut your Orders');
        }
        else{
            alert('Please Login')
        }
    }
    return (
        <div className='card'>
            <div className="img-section">
                <div className="img">
                    <h4>Imgbb isn't work</h4>
                </div>
            </div>
            <div className="content">
                <h3>{productName}</h3>
                <div className='price-btn'>
                    <span>${productPrice}</span>
                    <button onClick={()=>handleCheck(props.boxes)} className='btn'>Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
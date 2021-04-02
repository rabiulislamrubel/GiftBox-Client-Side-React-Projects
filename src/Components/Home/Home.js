import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Home.css';

const Home = () => {
    const [productData, setProductData] = useState([])
    useEffect(()=>{
        fetch('https://apple-tart-88350.herokuapp.com/boxes')
        .then(res=>res.json())
        .then(data=> setProductData(data))
    },[])
    return (
        <div>
            <div className='product-card'>
                {
                    productData.map(pd => <Card boxes={pd} key={pd._id}></Card>)
                }
            </div>
        </div>
    );
};

export default Home;
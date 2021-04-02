import React, { useEffect, useState } from 'react';
import Menu from '../Menu/Menu';
import './mp.css';

const ManageProduct = () => {
    const [tableData, setTableData] = useState([])
    useEffect(()=>{
        fetch('https://apple-tart-88350.herokuapp.com/boxes')
        .then(res=>res.json())
        .then(data=> setTableData(data))
    },[])
    const handleDelete=(id)=>{
        fetch(`https://apple-tart-88350.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>console.log(data))
    }
    return (
        <div className="right-menu">
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map(td =>  <tr>
                            <td>{td.productName}</td>
                            <td>${td.productPrice}</td>
                            <td>
                                <button >Update</button>
                                <button onClick={ () => handleDelete(td._id)}> Delete</button>
                            </td>
                        </tr> )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProduct;
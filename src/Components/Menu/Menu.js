import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
    <div>
        <Link to='/manage_product'><p>Manage Product</p></Link>
        <Link to='/add_product'><p>Add Product</p></Link>
        <Link to='/edit_product'><p>Edit product</p></Link>
    </div>
    );
};

export default Menu;
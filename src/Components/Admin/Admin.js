import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import Menu from '../Menu/Menu';
import './Admin.css';
import Form from './Form';

const Admin = () => {
  return (
    <div className='add-manage-product'>
      <Router>
        <div className="left-menu">
          <Menu></Menu>
        </div>
        <div className="admin-right-menu">
          <Switch>
            <Route path='/manage_product'>
              <ManageProduct/>
            </Route>
            <Route path='/add_product'>
              <AddProduct/>
            </Route>
          </Switch>
        </div>
        </Router>
    </div>
  )
};

export default Admin;
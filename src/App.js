import './App.css';
import Admin from './Components/Admin/Admin';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import Deals from './Components/Deals/Deals';
import Orders from './Components/Orders/Orders';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import Header from './Components/Header/Header';
export const UserContext = createContext();

function App() {
  const [loggedInInfo, setLoggedInInfo] = useState({});
  return (
  <UserContext.Provider value={[loggedInInfo, setLoggedInInfo]}>
    <Router>
    <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/home'>
            <Home/>
          </Route>
          <PrivateRoute path='/orders'>
            <Orders/>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
          <Route path='/manage_product'>
            <ManageProduct/>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider>
  );
}
export default App;

import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import menu from './Hamburger_icon.png'

const Header = () => {
    const [loggedInInfo, setLoggedInInfo] = useContext(UserContext);
    const [isActive, setActive] = useState("false");

    const handleToggle = () =>{    
        setActive(!isActive);
    }
    return (
        <nav>
            <div className="logo">
                <Link to='/' className='logo-txt'><h2>Fresh Valley</h2></Link>
                <div className="nav-bar">
                    <img src={menu} alt="" onClick= {handleToggle} />
                </div>
            </div>
            <div className={isActive ? "menu" : "isToggle"}>
                <ul>
                    <li><Link to='/home' className='link'>Home</Link></li>
                    <li><Link to='/orders' className='link'>Orders</Link></li>
                    <li><Link to='/admin' className='link'>Admin</Link></li>
                    <li><Link to='/deals' className='link'>Deals</Link></li>
                    <li>
                        {
                            loggedInInfo.email ? <img src='https://i.ibb.co/0mJj6CJ/Avatar-face.png' className='login-avatar' alt=""/> : <Link to='/login' className='login'>Login</Link>
                        }
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Header;
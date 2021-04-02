import React, { useContext } from 'react';
import firebaseConfig from './firebase.config';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInInfo, setLoggedInInfo] = useContext(UserContext);
    const provider = new firebase.auth.GoogleAuthProvider();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(provider)
    .then((result) => {
        setLoggedInInfo(result.user);
        history.replace(from);
    })
    .catch((error) => {
        console.log(error)
    });
}
    return (
        <div className='google-login'>
            <button className='g-btn' onClick={handleGoogleSignIn}>Google SignIn</button>
        </div>
    );
};

export default Login;
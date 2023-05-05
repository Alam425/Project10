import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.config';
// import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    // const GitProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            console.log(result?.user?.displayName);
            setUser(result.user);
            setSuccess('Successfully Logged In via Google');
        })
        .catch((r) => { console.log(r.message);})
    return (
        <div>
            <Navbar/>
            <div className='ms-10 p-5'>
                <p className="text-xl mb-5">Login with...</p>
                <button className="p-5 me-5 btn btn-primary"><Link to='/emailLogin'>Email</Link></button>
                <button onClick={() => googleSignIn()} className="p-5 me-5 btn btn-secondary">Google</button>
                <button className="p-5 me-5 btn btn-accent">Github</button>
                <p className='font-semibold text-md'>{success}</p>
            </div>
            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer />
        </div>
    );
};
}

export default Login;
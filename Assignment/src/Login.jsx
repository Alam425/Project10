import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.config';import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const GitProvider = new GithubAuthProvider();

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result?.user?.displayName);
                setUser(result.user);
                navigate('/', { replace: true });
            })
            .catch((r) => { console.log(r.message); })
    }

    const githubSignIn = () => {
        signInWithPopup(auth, GitProvider)
            .then((result) => {
                console.log(result?.user?.displayName);
                setUser(result.user);
                navigate('/', { replace: true });
                toast('Successfully logged in with google')
            })
            .catch((r) => { console.log(r.message); })
    }

    return (
        <div>
            <Navbar />
            {!user && <div>
                <div className='ms-10 p-5'>
                    <p className="text-xl mb-5">Login with...</p>
                    <button className="p-5 me-5 btn btn-primary"><Link to='/emailLogin'>Email</Link></button>
                    <button onClick={() => googleSignIn()} className="p-5 me-5 btn btn-secondary">Google</button>
                    <button onClick={() => githubSignIn()} className="p-5 me-5 btn btn-accent">Github</button>
                </div>
                <div className="mx-auto">
                    <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
                </div>
            </div>}
            <Footer />
        </div>
    );
};

export default Login;
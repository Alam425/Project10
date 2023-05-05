import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from './firebase.config';

const EmailLogin = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    const signIn = (e) => {
        e.preventDefault();
        const auth = getAuth(app);
        const password = e.target.value;
        const email = e.target.value;
        signInWithEmailAndPassword(auth, password, email)
        .then((e)=>{console.log(e.user);})
        .catch((ed)=>{ed.message})
    }
    return (
        <div>
            <Navbar />
            <form onSubmit={signIn} className='p-10'>
                <h1 className='text-4xl'>Login</h1>
                <input className='m-3 p-3 rounded border' type="email" name="email" required placeholder='Your Email' /><br />
                <input className='m-3 p-3 rounded border' type="password" name="password" required placeholder='Your password' />
                <p>New here?? <Link className='font-bold' to='/register'>Register</Link> now.</p>
                <button type="submit" className='btn btn-success'>Submit</button>
            </form>
            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer />
        </div>
    );
};

export default EmailLogin;
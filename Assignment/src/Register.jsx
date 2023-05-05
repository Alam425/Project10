import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './firebase.config';

const Register = () => {
    const auth = getAuth(app);
    const emailref = useRef();

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    const emailLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        // const name = e.target.name.value;
        const password = e.target.confirmPassword.value;
        // const photoURL = e.target.photoURL.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result?.user);
        })
        .catch((e) => {console.log(e.massage);})
    }


    return (
        <div>
            <Navbar />
            <form onSubmit={emailLogin} className='p-10'>
                <h1 className='text-4xl'>Register</h1>
                <input className='m-3 p-3 border rounded' type="text" name="name" required placeholder='Your Name' /><br />
                <input className='m-3 p-3 border rounded' ref={emailref} type="email" name="email" required placeholder='Your Email' /><br />
                {<><input className='m-3 p-3 border rounded' type="password" name="password" required placeholder='Your password' /><br /></> &&
                <><input className='m-3 p-3 border rounded' type="password" name="confirmPassword" required placeholder='Your password' /><br /></>}
                <input className='m-3 p-3 border rounded' type="text" name="photoURL" placeholder='Your PhotoURL' />
                <p>Already have an account?? <Link className='font-bold' to='/login'>Login</Link> now.</p>
                <button className="btn btn-success" type='submit'>Submit</button>
            </form>


            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;
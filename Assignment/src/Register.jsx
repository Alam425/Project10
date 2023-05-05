import React from 'react';
import Navbar from './Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

const Register = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <Navbar />
            <div className='ms-5 p-5'>
                <p className="text-xl mb-5">Register with...</p>
                <button className="btn p-5 me-5 btn-primary">Email</button>
                <button className="btn p-5 me-5 btn-secondary">Google</button>
                <button className="btn p-5 me-5 btn-accent">Github</button>
            </div>

            <div className='p-10'>
                <h1 className='text-4xl'>Register</h1>
                <input className='m-3 p-3 border rounded' type="text" name="name" required placeholder='Your Name' /><br />
                <input className='m-3 p-3 border rounded' type="email" name="email" required placeholder='Your Email' /><br />
                <input className='m-3 p-3 border rounded' type="password" name="password" required placeholder='Your password' /><br />
                <input className='m-3 p-3 border rounded' type="password" name="confirm-password" required placeholder='Your password' /><br />
                <input className='m-3 p-3 border rounded' type="text" name="photoURL" placeholder='Your PhotoURL' />
                <p>Already have an account?? <Link className='font-bold' to='/login'>Login</Link> now.</p>
            </div>


            <div className="mx-auto">
                <button onClick={() => goBack()} className="btn btn-ghost mx-auto">Go Back</button>
            </div>
            <Footer/>
        </div>
    );
};

export default Register;